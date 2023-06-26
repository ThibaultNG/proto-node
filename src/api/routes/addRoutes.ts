import { Application } from "express";
import gameRouter from "./gameRouter";
import weatherRouter from "./weatherRouter";
import editorRouter from "./editorRouter";
import { logEntryResponse } from "../../middlewares/endPointLogger";

export default function addRoutes(app: Application) {
	app.use("/", logEntryResponse);

	app.use("/game", gameRouter);
	app.use("/weather", weatherRouter);
	app.use("/editor", editorRouter);
}
