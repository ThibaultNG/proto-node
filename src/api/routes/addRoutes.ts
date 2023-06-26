import { Application } from "express";
import gameRouter from "./gameRouter";
import weatherRouter from "./weatherRouter";
import editorRouter from "./editorRouter";
import { logEntryRequest } from "../../middlewares/endPointLogger";

export default function addRoutes(app: Application) {
	app.use("/", logEntryRequest);

	app.use("/game", gameRouter);
	app.use("/weather", weatherRouter);
	app.use("/editor", editorRouter);
}
