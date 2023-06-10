import { Message } from "whatsapp-web.js";
import { commandDispatcher } from "../utils/CommandDispatcher";
import Hora from "./Hora";

export const CommandHandler = async (message: Message): Promise<void> => {
    if (!message.body.startsWith('/')) return;

    await commandDispatcher.register('hora', new Hora(message.body));

    await commandDispatcher.dispatch(message.body.slice(1), message);
};