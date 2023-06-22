import express, { Application } from "express";
import addRoutes from "api/routes/appRoutes.ts";

const app: Application = express();
const hostname: string = "localhost";
const port: number = 5000;

addRoutes(app);

app.listen(port, hostname, () => {
	console.log("running on = " + hostname + ":" + port);
});

app.use(express.json);
