import GameDTO from "@/model/game/api/gameDTO";
import GameLookupDTO from "@/model/game/api/gameLookupDTO";
import ShopDTO from "@/model/game/api/shopDTO";
import Game from "@/model/game/game";
import Shop from "@/model/game/shop";
import axios from "axios";

export const CHEAPSHARK_URL: string = "https://www.cheapshark.com";
const API_URL: string = "/api/1.0";
const GAME_LIST_LIMIT: number = 20;

export async function getShops(): Promise<Shop[]> {
	return axios
		.get(CHEAPSHARK_URL + API_URL + "/stores")
		.then((res) => res.data as ShopDTO[])
		.then((storeInfoList) => storeInfoList.map((storeInfoList) => new Shop(storeInfoList)));
}

export async function getGamesByTitle(title: string): Promise<Game[]> {
	return axios
		.get(CHEAPSHARK_URL + API_URL + "/games", {
			params: {
				title: title,
				limit: GAME_LIST_LIMIT
			}
		})
		.then((res) => res.data as GameDTO[])
		.then((gameBriefList) =>
			gameBriefList.map((gameBrief) => Game.fromGameBrief(gameBrief) as Game)
		);
}

export async function getDealsByGameId(gameId: number): Promise<Game> {
	return axios
		.get(CHEAPSHARK_URL + API_URL + "/games", {
			params: {
				id: gameId
			}
		})
		.then((res) => res.data as GameLookupDTO)
		.then((gameLookUp) => Game.fromGameLookUp(gameLookUp, gameId));
}
