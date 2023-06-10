import { Client, MessageMedia, LocalAuth } from 'whatsapp-web.js';
import * as qrcode from 'qrcode-terminal';
import { resolve } from 'path';
import dotenv from 'dotenv';

const client = new Client({
  authStrategy: new LocalAuth({
    clientId: 'wpp-bot',
    dataPath: resolve(__dirname, '', 'data'),
  }),
  puppeteer: {
    headless: true,
    args: ['--no-sandbox'],
  },
});

client.on('qr', async (qr) => qrcode.generate(qr, { small: true }));
client.on('authenticated', () => console.log('WhatsApp authenticated.'));
client.on('auth_failure', () => console.log('WhatsApp authentication failed.'));
client.on('disconnected', () => console.log('WhatsApp lost connection.'));

client.initialize();

export { client, MessageMedia };