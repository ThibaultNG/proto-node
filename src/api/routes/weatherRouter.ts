import { Router, Request, Response } from "express";
import * as weatherController from "@/controllers/weatherController";

const weatherRouter = Router();

weatherRouter.get("/getWeatherInfo", (req: Request, res: Response) => {
	console.log("in api getWeatherInfo");

	res = weatherController.getWeatherInfo(req, res);

	// console.log(req.query);
});

export default weatherRouter;
