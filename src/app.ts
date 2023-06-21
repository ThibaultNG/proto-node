import express from "express";
import appRoutes from "api/routes/appRoutes.ts";

function main() {
	const app = express();
	const port = 5000;

	appRoutes(app);

	app.listen(port, () => {
		console.log("App is listening on port " + port);
	});

	app.use(express.json);
}

main();
