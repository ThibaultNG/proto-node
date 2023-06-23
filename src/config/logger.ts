const { createLogger, transports, format } = require("winston");

const customFormat = format.combine(
	format.timestamp(),
	format.printf((info: any) => {
		return `[${info.timestamp}] [${info.level.toUpperCase().padEnd(7)}] - ${info.message}`;
	})
);

const logger = createLogger({
	level: "silly", // level : silly < debug < verbose < info < warn < error
	format: customFormat,
	transports: [
		new transports.Console({ level: "debug" }),
		new transports.File({ filename: "./src/logs/app.log", level: "info" })
	]
});

export default logger;
