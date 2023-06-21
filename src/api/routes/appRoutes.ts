import { Application } from "express";

export default function addRoutes(app: Application) {
	//game

	//weather
	const weatherRouter = require("./weather/weatherRouter");
	app.use("/weather", weatherRouter);
}
