import express, { Request, Response } from "express";
import cors from "cors";

const PORT = process.env.PORT || 3000;

const app = express();

const corsOptions = {
  origin: "*",
};
app.use(cors(corsOptions));

app.get("/", (req: Request, res: Response) => {
  res.status(200).json({ message: "Main API /" });
});

app.use((req: Request, res: Response) => {
  res.status(200).json({ error: "Main API - Route not found" });
});

app.listen(PORT, () => console.log(`Server ready: http://localhost:${PORT}`));

export default app;
