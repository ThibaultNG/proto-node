import * as weatherService from "../service/weatherService";
import Weather from "@/model/weather/weather";

export const getWeatherInfo = (latitude: string, longitude: string): Promise<Weather | void> => {
	if (parseFloat(latitude) < -90) {
		latitude = "-90";
	} else if (parseFloat(latitude) > 90) {
		latitude = "90";
	}
	if (parseFloat(longitude) > 180) {
		longitude = "179.15";
	} else if (parseFloat(longitude) < -180) {
		longitude = "-180";
	}

	return weatherService.getWeatherInfo(latitude, longitude);
};
