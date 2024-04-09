import { Hono } from "hono";

const app = new Hono();

app.get("/", (c) => c.json("list of quotes"));
app.post("/", (c) => c.json("created quote", 201));
app.get("/:id", (c) => c.json(`get quote ${c.req.param("id")}`));

export default app;
