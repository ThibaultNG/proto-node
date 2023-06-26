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
