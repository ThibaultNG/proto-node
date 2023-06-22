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
		}).finally(()=>console.log("finally")
		);
}

export function getGames(req: Request, res: Response) {
	if(!req.query.title) {
		res.status(400).send("Missing title param");
	} else {
		res.status(200).json(gameService.getGamesByTitle(req.query.title as string));
	}


	console.log(req.query);
	
}

export function getDeals(req: Request, res: Response){
	console.log(req.params.gameId);
	
}