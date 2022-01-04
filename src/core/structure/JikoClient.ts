import {LogLevel, SapphireClient} from "@sapphire/framework";
import {Configuration} from "@sach1/dahlia";

declare module '@sapphire/framework' {
    interface SapphireClient {
        config: Configuration
    }
}

export class JikoClient extends SapphireClient {
    public config: Configuration = new Configuration('config.yml')
    constructor() {
        super({
            intents: ['GUILDS', 'GUILD_MESSAGES', 'GUILD_MEMBERS'],
            presence: {
                status: 'online'
            },
            shards: 'auto',
            partials: ['CHANNEL', 'GUILD_MEMBER'],
            logger: {
                level: LogLevel.Debug,
            },
            loadMessageCommandListeners: true
        });

        this.on('ready', () => {
            this.logger.info(`${this.user!.tag} has logged in`)
        })
    }

    start(): void {
        this.login(this.config.get<string>('bot.token')!).catch(this.logger.warn)
    }
}