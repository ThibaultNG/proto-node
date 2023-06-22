export default interface WeatherApiDTO {
	latitude: number;
	longitude: number;
	generationtime_ms: number;
	current_weather: CurrentWeatherApiDTO;
}

export interface CurrentWeatherApiDTO {
	temperature: number;
	windspeed: number;
	winddirection: number;
	is_day: number;
	time: string;
}
