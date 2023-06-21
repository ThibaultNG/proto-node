import WeatherDTO from "@/model/weather/dto/weatherDTO";
import { getInfoWeatherService } from "../../service/weatherService";

export const wOne = (req: any, res: any) => {
	console.log("in wOne");
	console.log("res.value = " + res.value);
	res.json("in wOne");
	res.send();
};

export const wTwo = (req: any, res: any) => {
	console.log("in wTwo");
	res.json("in wTwo");
	res.send();
};
// module.exports = { wOne, wTwo }

export const getWeatherInfo = (req: any, res: any, next: any) => {
	console.log("in controller getWeatherInfo");
	getInfoWeatherService(0, 0).then((response: any) => {
		console.log("in service then getInfoWeatherService");
		const responseDataDTO: WeatherDTO = response.data as WeatherDTO;

		// res.status(200).json(req.query)
		res.status(200).json(responseDataDTO);
	});
};
