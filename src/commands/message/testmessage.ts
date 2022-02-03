import { MessageCommand } from "slashasaurus";

export default new MessageCommand(
	{
		name: "Message Test",
	},
	(interaction, _client) => {
		let name =
			interaction.targetMessage.author.username +
			"#" +
			interaction.targetMessage.author.discriminator;
		interaction.reply({
			content: `MESSAGE FROM USER \`${name}\` GOT RIGHT CLICKED OMG IT'S TURNING INTO AN NFT`,
			ephemeral: true,
		});
	}
);
