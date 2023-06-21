import { Application } from "express";

export default function addRoutes(app : Application) {
	//weather
	const weatherRouter = require("./weather/weatherRouter");
	app.use("/weather", weatherRouter);
}
