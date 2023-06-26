import { Application } from "express";
import gameRouter from "./gameRouter";
import weatherRouter from "./weatherRouter";
import editorRouter from "./editorRouter";

export default function addRoutes(app: Application) {
	app.use("/game", gameRouter);
	app.use("/weather", weatherRouter);
	app.use("/editor", editorRouter);
}
