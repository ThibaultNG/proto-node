const express = require("express");
const router = express.Router();

<<<<<<< Updated upstream
import { wOne, wTwo } from "@/controllers/weather/weatherGet";
router.get(
	"/wOne",
	(req: any, res: any, next: any) => {
		console.log("in middleware of /wOne");
		res.value = 3;
		next();
	},
	wOne
);
=======
import { getWeatherInfo, wOne, wTwo } from "@/controllers/weather/weatherGet";
router.get("/wOne",(req : any, res : any, next: any) => {
    console.log("in middleware of /wOne");
    res.value = 3
    next();
} , wOne);

>>>>>>> Stashed changes
router.get("/wTwo", wTwo);

//TODO : refactor and clean code and seperation of concerns
router.get("/getWeatherInfo", (req : any, res : any, next : any) => {
    console.log("in api getWeatherInfo")
    getWeatherInfo(req, res, next)
    console.log(req.query)
})

module.exports = router;
