import express, { Application } from "express";
import addRoutes from "api/routes/appRoutes.ts";

const app: Application = express();
const port: number = 5000;

addRoutes(app);

app.listen(port, () => {
	console.log("App is listening on port " + port);
});

app.use(express.json);
