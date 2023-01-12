import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import { rootRouter } from "./routes/index.js";

export const initApp = () => {
  const app = express();

  // Global middlewares
  app.use(
    cors({
      origin: ["hexagonal-2048.up.railway.app", "http://localhost:3000"],
    })
  );
  app.use(bodyParser.json());

  // Routes
  app.use("/", rootRouter);

  return app;
};
