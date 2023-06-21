export default class Currency {
	name: string;
	code: string;
	symbol: string;
	left: boolean; // Is the symbol on the left of the price ?
	commaSeparator: boolean; // Is the decimal point separated with a comma ?
	rate: number;

	constructor(
		name: string,
		code: string,
		symbol: string,
		left: boolean,
		commaSeparator: boolean,
		rate: number
	) {
		this.name = name;
		this.code = code;
		this.symbol = symbol;
		this.left = left;
		this.commaSeparator = commaSeparator;
		this.rate = rate;
	}

	static getPriceTag(price: number, currency: Currency): string {
		let priceTag: string = "";

		if (currency.left) {
			priceTag += currency.symbol;
		}

		const priceString = (price * currency.rate).toFixed(2).toString();

		if (currency.commaSeparator) {
			priceString.replace(",", ".");
		}

		priceTag += priceString;

		if (!currency.left) {
			priceTag += currency.symbol;
		}

		return priceTag;
	}
}
