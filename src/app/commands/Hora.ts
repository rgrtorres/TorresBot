import type { Message } from 'whatsapp-web.js';

export default class Hora {
    async execute(msg: Message): Promise<Message> {
        const currentDate: Date = new Date();
        const currentHour: number = currentDate.getHours();
        const currentMinute: number = currentDate.getMinutes();

        return msg.reply(`Tem relogio não vagabundo? são ${currentHour}:${currentMinute}`);
    }
}