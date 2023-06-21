import { Router } from "express";
import { wOne, wTwo } from "@/controllers/weather/weatherGet";

const weatherRouter = Router();

weatherRouter.get(
	"/wOne",
	(req: any, res: any, next: any) => {
		console.log("in middleware of /wOne");
		res.value = 3;
		next();
	},
	wOne
);
weatherRouter.get("/wTwo", wTwo);

export default weatherRouter;
