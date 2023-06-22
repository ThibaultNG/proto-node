export default interface WeatherServiceDTO {
	latitude: number;
	longitude: number;
	generationtime_ms: number;
	current_weather: CurrentWeatherServiceDTO;
}

export interface CurrentWeatherServiceDTO {
	temperature: number;
	windspeed: number;
	winddirection: number;
	is_day: number;
	time: string;
}
