import { Request, Response } from "express";
import * as weatherController from "@/controllers/weatherController";
import Weather from "@/model/weather/weather";
import logger from "@/config/logger";

export const getWeatherInfo = (req: Request, res: Response): void => {
	if (req.query.latitude && req.query.longitude) {
		logger.debug(
			"weather middleware : getWeatherInfo() was called, " +
				"with query.latitude = " +
				req.query.latitude +
				" and query.longitude = " +
				req.query.longitude
		);

		weatherController
			.getWeatherInfo(req.query.latitude as string, req.query.longitude as string)
			.then((response: Weather | void) => {
				if (response != undefined) {
					logger.debug("weather : getWeatherInfo() returned response = ");
					logger.debug(JSON.stringify(response));
					return res.json(Weather.fromModelToApiDTO(response));
				}
			})
			.catch((error) => res.status(500).send(error));
	} else {
		logger.debug(
			"weather middleware : getWeatherInfo() called with missing latitude and longitude query parameter"
		);
		res.status(400).send("Error 400 : Missing latitude and longitude query parameter");
		return;
	}
};
