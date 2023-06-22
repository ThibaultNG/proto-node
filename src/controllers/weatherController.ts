import { Request, Response } from "express";
import * as weatherService from "../service/weatherService";
import Weather from "@/model/weather/weather";
import WeatherApiDTO from "@/model/weather/api/dto/weatherApiDTO";

export const getWeatherInfo = (latitude: string, longitude: string): Promise<void | WeatherApiDTO> => {
	console.log("in controller getWeatherInfo");

	//TODO : refactor below
	if(parseFloat(latitude) < -90){
		latitude = '-90'
	}else if(parseFloat(latitude) > 90){
		latitude = '90'
	}
	if(parseFloat(longitude) > 180){
		longitude = '179.15';
	}else if(parseFloat(longitude) < -180){
		longitude = '-180';
	}

	return weatherService.getWeatherInfo(latitude, longitude)
		.then((response) => {
			if(response != undefined){
				let dataApiDTO = Weather.fromModelToApiDTO(response!);
				console.log("dataApiDTO = ");
				console.log(dataApiDTO)
				return dataApiDTO;
			}
		}).catch((error)=>{})

};
