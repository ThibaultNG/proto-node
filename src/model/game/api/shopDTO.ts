export default interface ShopDTO {
	storeID: string;
	storeName: string;
	isActive: number;
	images: {
		banner: string;
		logo: string;
		icon: string;
	};
}
