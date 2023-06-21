import axios from "axios";

export function getInfoWeatherService(latitude: any, longitude: any): Promise<any> {
	return axios.get(
		"https://api.open-meteo.com/v1/forecast" +
			"?latitude=" +
			latitude +
			"&longitude=" +
			longitude +
			"&current_weather=" +
			true
	);
}
