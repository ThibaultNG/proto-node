import { getInfoWeatherService } from "../../service/weatherService";
import Weather from "@/model/weather/weather";

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

export const getWeatherInfo = async (req: any, res: any) => {
	console.log("in controller getWeatherInfo");

	let data = new Weather();
	await getInfoWeatherService(data, 0, 0);

	let dataApiDTO = Weather.fromModelToApiDTO(data);
	// res.status(200).json(req.query)
	res.status(200).json(dataApiDTO);
};
