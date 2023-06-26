import { Request, Response } from "express";
import fs from "fs";

export function getFile(req: Request, res: Response): void {
	try {
		const data = fs.readFileSync(process.env.DEMBOOST + "/config/device.yaml", "utf8");
		res.send(data);
	} catch (err) {
		console.error(err);
	}
}

export function saveFile(req: Request, res: Response): void {
	if (req.body.data) {
		try {
			fs.writeFileSync(process.env.DEMBOOST + "/config/config_temp.yaml", req.body.data);
			res.status(200).send("File successfully saved");
		} catch (err) {
			res.status(500).send("Could not save file");
		}
	} else {
		res.status(400).send("Missing data");
	}
}
