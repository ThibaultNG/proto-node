import type DealDTO from "./dealDTO";

export default interface GameLookupDTO {
	info: {
		title: string;
		steamAppID: string;
		thumb: string;
	};
	cheapestPriceEver: {
		price: number;
		date: Date;
	};
	deals: DealDTO[];
}
