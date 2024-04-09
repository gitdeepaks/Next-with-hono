import { Hono } from "hono";

const app = new Hono();

app.get("/quotes", (c) => c.json("list of quotes"));
app.post("/quotes", (c) => c.json("created quote", 201));
app.get("/:id", (c) => c.json(`get quote ${c.req.param("id")}`));

export default app;
