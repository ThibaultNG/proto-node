import express, { Router } from "express";
const router = Router();

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
router.get("/wTwo", wTwo);

module.exports = router;
