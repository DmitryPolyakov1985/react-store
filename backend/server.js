import express from "express";
import helmet from "helmet";
import morgan from "morgan";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());
// security middleware that helps protect application by setting various HTTP headers
app.use(helmet());
// log requests
app.use(morgan("dev"));

app.get("/test", (req, res) => {
  console.log(res.getHeaders());
  res.send("Hello from backend!");
});

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
