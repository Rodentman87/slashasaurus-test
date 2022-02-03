import { SlashCommand } from "slashasaurus";

export default new SlashCommand(
	{
		name: "sub",
		description: "Does a random test thing",
		options: [],
	},
	{
		run: async (interaction, _, __) => {
			interaction.reply({
				content: `AAAAAAAAAAAAA`,
				ephemeral: true,
			});
		},
	}
);
