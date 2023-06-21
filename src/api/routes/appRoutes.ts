import { Application } from "express";

export default function addRoutes(app: Application) {
	app.use("/game", () => import("./game/gameRouter"));
	app.use("/weather", () => import("./weather/weatherRouter"));
}
