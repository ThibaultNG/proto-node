import express, { Application } from "express";
import addRoutes from "@/api/routes/addRoutes";
import cors from "cors";

const app: Application = express();
const hostname: string = "127.0.0.1";
const port: number = 5000;

app.use(cors());
addRoutes(app);

app.listen(port, hostname, () => {
	console.log("Running on = http://" + hostname + ":" + port);
});

app.use(express.json);
