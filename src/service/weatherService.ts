import axios from "axios";
import WeatherDTO from "../model/weather/dto/weatherDTO"

export function getInfoWeatherService(latitude : any, longitude : any) : Promise<any> {
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
}


