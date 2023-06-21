import { Router } from "express";
import { wOne, wTwo } from "@/controllers/weather/weatherGet";

const gameRouter = Router();

gameRouter.get(
	"/wOne",
	(req: any, res: any, next: any) => {
		console.log("in middleware of /wOne");
		res.value = 3;
		next();
	},
	wOne
);
gameRouter.get("/wTwo", wTwo);

export default gameRouter;
