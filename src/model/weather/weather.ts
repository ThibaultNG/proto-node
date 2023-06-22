import WeatherApiDTO, { CurrentWeatherApiDTO } from "./api/dto/weatherApiDTO";
import WeatherServiceDTO, { CurrentWeatherServiceDTO } from "./service/dto/weatherServiceDTO";

export default class Weather {
	latitude: number;
	longitude: number;
	generationtime_ms: number;
	current_weather: CurrentWeather;

	constructor() {
		this.latitude = 0;
		this.longitude = 0;
		this.generationtime_ms = 0;
		this.current_weather = new CurrentWeather();
	}

	// ------------------------ v to model v -------------------------

	public static fromApiDtoToModel(weatherDTO: WeatherApiDTO): Weather {
		const weather: Weather = new Weather();
		weather.latitude = weatherDTO.latitude;
		weather.longitude = weatherDTO.longitude;
		weather.generationtime_ms = weatherDTO.generationtime_ms;
		weather.current_weather = CurrentWeather.fromServiceDtoToModel(weatherDTO.current_weather);
		return weather;
	}

	public static fromServiceDTOToModel(weatherDTO: WeatherServiceDTO): Weather {
		const weather: Weather = new Weather();
		weather.latitude = weatherDTO.latitude;
		weather.longitude = weatherDTO.longitude;
		weather.generationtime_ms = weatherDTO.generationtime_ms;
		weather.current_weather = CurrentWeather.fromServiceDtoToModel(weatherDTO.current_weather);
		return weather;
	}

	// ------------------------ ^ to model ^ -----------------------

	// ------------------------ v to dto v -------------------------

	public static fromModelToApiDTO(weather: Weather): WeatherApiDTO {
		const weatherApiDTO: WeatherApiDTO = new Object() as WeatherApiDTO;
		weatherApiDTO.latitude = weather.latitude;
		weatherApiDTO.longitude = weather.longitude;
		weatherApiDTO.generationtime_ms = weather.generationtime_ms;
		weatherApiDTO.current_weather = CurrentWeather.fromModelToApiDTO(weather.current_weather);
		return weatherApiDTO;
	}
	// ------------------------ ^ to dto ^ -------------------------
}

export class CurrentWeather {
	temperature: number;
	windspeed: number;
	winddirection: number;
	is_day: number;
	time: string;

	constructor() {
		this.temperature = 0;
		this.windspeed = 0;
		this.winddirection = 0;
		this.is_day = 0;
		this.time = "";
	}

	// ------------------------ v to model v -------------------------

	public static fromApiDtoToModel(currentWeatherDTO: CurrentWeatherApiDTO): CurrentWeather {
		const currentWeather: CurrentWeather = new CurrentWeather();
		currentWeather.temperature = currentWeatherDTO.temperature;
		currentWeather.windspeed = currentWeatherDTO.windspeed;
		currentWeather.winddirection = currentWeatherDTO.winddirection;
		currentWeather.is_day = currentWeatherDTO.is_day;
		currentWeather.time = currentWeatherDTO.time;
		return currentWeather;
	}

	public static fromServiceDtoToModel(
		currentWeatherDTO: CurrentWeatherServiceDTO
	): CurrentWeather {
		const currentWeather: CurrentWeather = new CurrentWeather();
		currentWeather.temperature = currentWeatherDTO.temperature;
		currentWeather.windspeed = currentWeatherDTO.windspeed;
		currentWeather.winddirection = currentWeatherDTO.winddirection;
		currentWeather.is_day = currentWeatherDTO.is_day;
		currentWeather.time = currentWeatherDTO.time;
		return currentWeather;
	}

	// ------------------------ ^ to model ^ -----------------------

	// ------------------------ v to dto v -------------------------

	public static fromModelToApiDTO(currentWeather: CurrentWeather): CurrentWeatherApiDTO {
		const currentWeatherApiDTO: CurrentWeatherApiDTO = new Object() as CurrentWeatherApiDTO;
		currentWeatherApiDTO.temperature = currentWeather.temperature;
		currentWeatherApiDTO.windspeed = currentWeather.windspeed;
		currentWeatherApiDTO.winddirection = currentWeather.winddirection;
		currentWeatherApiDTO.is_day = currentWeather.is_day;
		currentWeatherApiDTO.time = currentWeather.time;
		return currentWeatherApiDTO;
	}

	// ------------------------ ^ to dto ^ -----------------------
}
