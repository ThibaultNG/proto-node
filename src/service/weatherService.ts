import logger from "@/config/logger";
import WeatherServiceDTO from "@/model/weather/service/dto/weatherServiceDTO";
import Weather from "@/model/weather/weather";
import axios from "axios";

export function getWeatherInfo(latitude: any, longitude: any): Promise<Weather | void> {
	return axios
		.get(
			"https://api.open-meteo.com/v1/forecast" +
				"?latitude=" +
				latitude +
				"&longitude=" +
				longitude +
				"&current_weather=" +
				true
		)
		.then((response: any) => {
			logger.debug(
				"weather service : getWeatherInfo() called service open-meteo.com with parameters : latitude = " +
					latitude +
					" & longitude = " +
					longitude
			);
			logger.debug(" and received an answer : ");
			logger.debug(JSON.stringify(response.data, null, 2));
			const responseDataDTO: WeatherServiceDTO = response.data as WeatherServiceDTO;
			const data: Weather = responseDataDTO as Weather;
			return data;
		})
		.catch((error) => {
			logger.debug(
				"weather service : getWeatherInfo() called service open-meteo.com with parameters : latitude = " +
					latitude +
					" & longitude = " +
					longitude
			);
			logger.debug(" and received an error : " + error);
		});
}
