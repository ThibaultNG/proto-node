import Game from "@/model/game/game";
import Shop from "@/model/game/shop";
import * as gameService from "@/service/gameService";

export function getShops(): Promise<Shop[]> {
	return gameService.getShops();
}

export function getGamesByTitle(title: string): Promise<Game[]> {
	return gameService.getGamesByTitle(title);
}

export function getDeals(gameId: number): Promise<Game> {
	return gameService.getDealsByGameId(gameId);
}
