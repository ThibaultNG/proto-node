import type DealDTO from "./api/dealDTO";

export default class Deal {
	id: string;
	storeId: string;
	price: number;
	retailPrice: number;

	constructor(deal: DealDTO) {
		this.id = deal.dealID;
		this.storeId = deal.storeID;
		this.price = deal.price;
		this.retailPrice = deal.retailPrice;
	}

	getReduction(): number {
		return Math.ceil((1 - this.price / this.retailPrice) * 100);
	}

	public static fromApiDealList(apiDeals: DealDTO[]): Deal[] {
		const deals: Deal[] = [];

		apiDeals.forEach((apiDeal) => deals.push(new Deal(apiDeal)));

		return deals;
	}
}
