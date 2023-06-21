import { Application } from "express";
import gameRouter from "./game/gameRouter";
import weatherRouter from "./weather/weatherRouter";

export default function addRoutes(app: Application) {
	app.use("/game", gameRouter);
	app.use("/weather", weatherRouter);
}
