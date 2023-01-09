import { Router } from "express";

export const rootRouter = Router();

rootRouter.post("/api/:radius", (req, res) => {
  res.json({ status: "ok" });
});
