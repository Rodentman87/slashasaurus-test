import { UserCommand } from "slashasaurus";

export default new UserCommand(
	{
		name: "User Test",
	},
	(interaction, _client) => {
		let name = interaction.targetUser.tag;
		interaction.reply({
			content: `USER \`${name}\` GOT RIGHT CLICKED OMG THERE GOES THEIR NFT`,
			ephemeral: true,
		});
	}
);
