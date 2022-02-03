import "dotenv/config";
import { Intents } from "discord.js";
import path from "path";
import { InteractionsClient } from "slashasaurus";
import { logger } from "./logger";

(async () => {
	const client = new InteractionsClient(
		{
			intents: [Intents.FLAGS.GUILDS],
			restRequestTimeout: 30 * 1000,
		},
		{
			logger,
			devServerId: "561807594516381749",
		}
	);

	client.once("ready", () => {
		logger.info(`Client ready and logged in as ${client.user?.tag}`);
		client.registerCommandsFrom(
			path.join(__dirname, "/commands"),
			process.env.NODE_ENV === "development" ? "dev" : "global"
		);
	});

	await client.login(process.env.TOKEN);
})();
