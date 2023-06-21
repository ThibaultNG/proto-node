import type ShopDTO from "./api/shopDTO";
import { CHEAPSHARK_URL } from "../service/gameService";

export default class Shop {
	id: string;
	name: string;
	logo: string;

	constructor(storeInfo: ShopDTO) {
		this.id = storeInfo.storeID;
		this.name = storeInfo.storeName;
		this.logo = CHEAPSHARK_URL + storeInfo.images.logo;
	}
}
