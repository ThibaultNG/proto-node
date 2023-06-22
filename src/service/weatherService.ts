import WeatherServiceDTO from "@/model/weather/service/dto/weatherServiceDTO";
import Weather from "@/model/weather/weather";
import axios from "axios";

export function getWeatherInfo(
	latitude: any,
	longitude: any
): Promise<Weather | void> {
	console.log("service : latitude = "  + latitude + " | longitude = " + longitude);
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
			const data : Weather = responseDataDTO as Weather;
			return data;
		})
		.catch(() => {});
}
