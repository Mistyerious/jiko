import {Command, RegisterBehavior} from "@sapphire/framework";
import {CommandInteraction} from "discord.js";

export default class Ping extends Command {
    constructor(context: Command.Context) {
        super(context, {
            name: 'ping',
            description: 'Ping of bot',
            chatInputCommand: {
                behaviorWhenNotIdentical: RegisterBehavior.Overwrite,
                register: true,
                guildIds: ['875895582038843432']
            }
        });
    }
    chatInputRun(interaction: CommandInteraction) {
        interaction.reply({
            content: 'Pong!'
        })
    }
}