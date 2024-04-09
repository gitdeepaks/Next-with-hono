import { Hono, Context } from "hono";
import { handle } from "hono/vercel";
import { authHandler, initAuthConfig, verifyAuth } from "@hono/auth-js";
import todos from "./todos";

import { getAuthConfig } from "@/auth.config";

export const runtime = "edge";

const app = new Hono().basePath("/api");
app.use("*", initAuthConfig(getAuthConfig));
app.use("/auth/*", authHandler());

app.get("/protected", verifyAuth(), (c) => {
  const auth = c.get("authUser");
  return c.json({ auth });
});

app.route("/todos", todos);

export const GET = handle(app);
export const POST = handle(app);
