import { Router, Request, Response } from "express";
import * as weatherMiddleware from "@/middlewares/weatherMiddleware";

const weatherRouter = Router();

weatherRouter.get("/getWeatherInfo", (req: Request, res: Response) => {
	console.log("in api getWeatherInfo");

	res = weatherMiddleware.getWeatherInfo(req, res);

	// console.log(req.query);
});

export default weatherRouter;
