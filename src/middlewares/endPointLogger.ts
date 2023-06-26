import logger from "@/config/logger";

export function logEntryRequest(req: any, res: any, next: any) {
	logger.info(
		"Entry Request : From [" +
			req.rawHeaders[19] +
			"] to [" +
			req.rawHeaders[1] +
			"] requested url = " +
			req.url
	);
	logger.info(
		"    with parameters = " +
			JSON.stringify(req.params) +
			" and query = " +
			JSON.stringify(req.query)
	);
	next();
}
