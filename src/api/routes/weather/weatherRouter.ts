import { Router } from "express";
import { getWeatherInfo, wOne, wTwo } from "@/controllers/weather/weatherGet";

const weatherRouter = Router();

weatherRouter.get(
	"/wOne",
	(req: any, res: any, next: any) => {
		console.log("in middleware of /wOne");
		res.value = 3;
		next();
	},
	wOne
);

weatherRouter.get("/wTwo", wTwo);

//TODO : refactor and clean code and seperation of concerns
weatherRouter.get("/getWeatherInfo", (req: any, res: any) => {
	console.log("in api getWeatherInfo");
	getWeatherInfo(req, res);
	console.log(req.query);
});

export default weatherRouter;
