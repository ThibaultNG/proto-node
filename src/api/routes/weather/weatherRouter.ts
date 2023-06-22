import { Router, Request, Response } from "express";
import * as weatherController from "@/controllers/weather/weatherGet";

const weatherRouter = Router();

weatherRouter.get("/getWeatherInfo", async (req: Request, res: Response) => {
	console.log("in api getWeatherInfo");

	res = await weatherController.getWeatherInfo(req, res);

	res.status(200);
	res.send();

	console.log(req.query);
});

export default weatherRouter;
