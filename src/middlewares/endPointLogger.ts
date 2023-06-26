import logger from "@/config/logger";

export function logEntryRequest(req: any, res: any, next: any) {
	logger.info(
		"[API CALL] client='" +
			req.rawHeaders[19] +
			"' request='" +
			req.url +
			"', path='" +
			req.path +
			"', method='" +
			req.method +
			"', parameters=" +
			JSON.stringify(req.params) +
			", query=" +
			JSON.stringify(req.query) +
			""
	);
	next();
}
