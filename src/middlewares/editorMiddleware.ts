import { Request, Response } from "express";
import fs from "fs";

export function getFile(req: Request, res: Response): void {
	if (req.query.fileName) {
		try {
			const file = fs.readFileSync(
				process.env.DEMBOOST + "/config/" + req.query.fileName,
				"utf8"
			);
			res.status(200).send(file);
		} catch (err) {
			res.status(500).send("Error : could not fetch file with name " + req.query.fileName);
		}
	} else {
		res.status(400).send("Missing fileName param");
	}
}

export function saveFile(req: Request, res: Response): void {
	if (req.body.fileName && req.body.content) {
		console.log(req.body);

		try {
			fs.writeFileSync(
				process.env.DEMBOOST + "/config/" + req.body.fileName,
				req.body.content
			);
			res.status(200).send("File successfully saved");
		} catch (err) {
			res.status(500).send("Could not save file");
		}
	} else {
		res.status(400).send("Missing fileName and/or content");
	}
}
export function getFileList(req: Request, res: Response) {
	try {
		const files = fs.readdirSync(process.env.DEMBOOST + "/config");
		res.status(200).json(files);
	} catch (error) {
		res.status(500).send("Saved files could not be found");
	}
}
