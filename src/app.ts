import express, { Application } from "express";
import addRoutes from "@/api/routes/addRoutes";
import cors from "cors";
import logger from "./config/logger";

const app: Application = express();
const hostname: string = "127.0.0.1";
const port: number = 5000;

app.use(cors());
addRoutes(app);

app.listen(port, hostname, () => {
	logger.info("Running on = http://" + hostname + ":" + port);
});

app.use(express.json);
