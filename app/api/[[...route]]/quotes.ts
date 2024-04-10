import { db } from "@/db/drizzle";
import { verifyAuth } from "@hono/auth-js";
import { Hono } from "hono";
import { quotelessJson, z } from "zod";
import { zValidator } from "@hono/zod-validator";
import { HTTPException } from "hono/http-exception";
import { text } from "stream/consumers";
import { use } from "react";
import { ne } from "drizzle-orm";
import { qoutes } from "@/db/schema";
import { createId } from "@paralleldrive/cuid2";

const schema = z.object({
  text: z.string(),
});

const app = new Hono()
  .get("/", verifyAuth(), async (c) => {
    const quotes = await db.query.qoutes.findMany({
      orderBy: (qoutes, { desc }) => [desc(qoutes.createdAt)],
      with: {
        user: true,
      },
    });
    return c.json(quotes);
  })
  .post("/", verifyAuth(), zValidator("form", schema), async (c) => {
    const auth = c.get("authUser");
    const data = c.req.valid("form");

    if (!auth.user) {
      throw new HTTPException(401);
    }
    const quote = await db
      .insert(qoutes)
      .values({
        id: createId(),
        text: data.text,
        userId: auth.user.id,
      })
      .returning();
    return c.json(quote);
  });

export default app;
