import { Request, Response } from "express";
import * as weatherService from "../service/weatherService";
import Weather from "@/model/weather/weather";

export const getWeatherInfo = (req: Request, res: Response): Response => {
	console.log("in controller getWeatherInfo");

	let data = new Weather();
	weatherService
		.getWeatherInfo(data, req.query.latitude, req.query.longitude)
		.then((response) => {
			let dataApiDTO = Weather.fromModelToApiDTO(response!);
			res.json(dataApiDTO);
		});

	return res;
};
