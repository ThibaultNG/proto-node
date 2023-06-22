import * as gameController from "@/controllers/games/gameController";
import Game from "@/model/game/game";
import Shop from "@/model/game/shop";
import { Request, Response } from "express";

export function getShops(req: Request, res: Response) {
	console.log("get shops");

	gameController
		.getShops()
		.then((shops: Shop[]) => {
			res.status(200).json(shops);
		})
		.catch((error) => {
			res.status(500).send(error);
		})
		.finally(() => console.log("Shops sent"));
}

export function getGamesByTitle(req: Request, res: Response) {
	if (req.query.title) {
		gameController
			.getGamesByTitle(req.query.title as string)
			.then((games: Game[]) => {
				res.status(200).json(games);
			})
			.catch((error) => res.status(500).send(error));
	} else {
		res.status(400).send("Error 400 : Missing title param");
	}
}

export function getDeals(req: Request, res: Response) {
	if (req.params.gameId) {
		if (isNaN(req.params.gameId as any)) {
			res.status(400).send("Error 400 : gameId is NaN");
		} else {
			gameController
				.getDeals(Number(req.params.gameId))
				.then((deals) => res.status(200).json(deals))
				.catch((error) => res.status(500).send(error));
		}
	} else {
		res.status(400).send("Error 400 : Missing gameId path param");
	}
}
