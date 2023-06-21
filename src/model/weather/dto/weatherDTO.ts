export default interface WeatherDTO {
	latitude: number;
	longitude: number;
	generationtime_ms: number;
	current_weather: CurrentWeatherDTO;
}

export interface CurrentWeatherDTO {
	temperature: number;
	windspeed: number;
	winddirection: number;
	is_day: number;
	time: string;
}
