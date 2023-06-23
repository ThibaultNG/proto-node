import { Request, Response } from "express";
import * as weatherController from "@/controllers/weatherController";
import Weather from "@/model/weather/weather";

export const getWeatherInfo = (req: Request, res: Response): void => {
	if (req.query.latitude && req.query.longitude) {
		weatherController
			.getWeatherInfo(req.query.latitude as string, req.query.longitude as string)
			.then((response: Weather | void) => {
				if (response != undefined) {
					return res.json(Weather.fromModelToApiDTO(response));
				}
			})
			.catch((error) => res.status(500).send(error));
	} else {
		res.status(400).send("Error 400 : Missing latitude, longitude parameter");
	}
};
