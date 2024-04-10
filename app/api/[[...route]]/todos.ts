import { Hono } from "hono";

const app = new Hono()
  .get("/", (c) => c.json("list todos"))
  .post("/", (c) => c.json("create an todo", 201))
  .get("/:id", (c) => c.json(`get ${c.req.param("id")}`));

export default app;
