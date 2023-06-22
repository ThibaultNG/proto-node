import { Request, Response } from "express";
import * as gameService from "@/service/gameService";

export function getShops(req: Request, res: Response) {
	gameService
		.getShops()
		.then((shops) => {
			res.status(200).json(shops);
		})
		.catch((error) => {
			res.status(500).send(error);
		})
		.finally(() => console.log("finally"));
}
