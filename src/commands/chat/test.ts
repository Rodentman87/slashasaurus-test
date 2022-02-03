import { SlashCommand } from "slashasaurus";

export default new SlashCommand(
	{
		name: "test",
		description: "Does a random test thing",
		options: [
			{
				type: "STRING",
				name: "test2",
				description: "thing",
				choices: [
					{
						name: "thing",
						value: "thing1",
					},
					{
						name: "thing 2",
						value: "thing2",
					},
				] as const,
			},
		],
	},
	{
		run: async (interaction, _, options) => {
			interaction.reply({
				content: `AAAAAAAAAAAAA ${options.test2}`,
				ephemeral: true,
			});
		},
	}
);
