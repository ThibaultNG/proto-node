import { Router } from "express";
import * as weatherMiddleware from "@/middlewares/weatherMiddleware";

const weatherRouter = Router();

weatherRouter.get("/getWeatherInfo", weatherMiddleware.getWeatherInfo);

export default weatherRouter;
