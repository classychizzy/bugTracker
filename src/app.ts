import cors from "cors";
import express, { Request, Response } from "express";
import helmet from "helmet";

const app = express();
app.use(helmet());
app.use(express.json());
app.use(cors());
app.disable("x-powered-by");

app.get("/", (req: Request, res: Response) => {
  return res.status(200).send("API root: '/api'");
});

export default app;