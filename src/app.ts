function main() {
	const express = require("express");
	const app = express();
	const port = 5000;

	const appRoutes = require("./routes/appRoutes");
	appRoutes.addRoutes(app);

	app.listen(port, (error) =>{
		if(!error)
			console.log("App is listening on port "+ port)
		else 
			console.log("Error occurred, server can't start", error);
	});

	app.use(express.json);
}

main();
