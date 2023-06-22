import { Application } from "express";
import gameRouter from "./gameRouter";
import weatherRouter from "./weatherRouter";

export default function addRoutes(app: Application) {
	app.use("/game", gameRouter);
	app.use("/weather", weatherRouter);
}
