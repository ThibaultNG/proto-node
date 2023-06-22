import * as gameService from "@/service/gameService";

export function getShops() {
	return gameService.getShops()
}

export function getGamesByTitle(title : string) {
	return gameService.getGamesByTitle(title);	
}

export function getDeals(gameId: number){
	return gameService.getDealsByGameId(gameId)
	
}