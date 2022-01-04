import {ChatInputCommand, Command, RegisterBehavior} from "@sapphire/framework";
import {CommandInteraction} from "discord.js";

export default class HelloWorld extends Command {
    constructor(context: Command.Context) {
        super(context, {
            name: 'helloWorld',
            description: 'responds with hello world',
            chatInputCommand: {
                behaviorWhenNotIdentical: RegisterBehavior.Overwrite,
                register: true,
                guildIds: ['875895582038843432'],
            },
        });
    }
    chatInputRun(interaction: CommandInteraction) {
        interaction.reply({
            content: 'Hello World!'
        })
    }
}