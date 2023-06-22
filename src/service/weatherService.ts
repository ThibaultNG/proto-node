import WeatherServiceDTO from "@/model/weather/service/dto/weatherServiceDTO";
import Weather from "@/model/weather/weather";
import axios from "axios";

export function getWeatherInfo(
	data: Weather,
	latitude: any,
	longitude: any
): Promise<Weather | void> {
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
			console.log("in service then getInfoWeatherService");
			const responseDataDTO: WeatherServiceDTO = response.data as WeatherServiceDTO;
			data = responseDataDTO as Weather;
			return data;
		})
		.catch(() => {});
}
