import { Request, Response } from "express";
import * as weatherService from "../../service/weatherService";
import Weather from "@/model/weather/weather";

export const getWeatherInfo = async (req: Request, res: Response): Promise<Response> => {
	console.log("in controller getWeatherInfo");

	let data = new Weather();
	await weatherService.getWeatherInfo(data, 0, 0);

	let dataApiDTO = Weather.fromModelToApiDTO(data);
	res.json(dataApiDTO);

	return res;
};
