export const wOne = (req: any, res: any) => {
	console.log("in wOne");
	console.log("res.value = " + res.value);
	res.json("in wOne");
	res.send();
};

export const wTwo = (req: any, res: any) => {
	console.log("in wTwo");
	res.json("in wTwo");
	res.send();
};
// module.exports = { wOne, wTwo }
