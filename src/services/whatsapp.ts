import { Client, MessageMedia, LocalAuth } from 'whatsapp-web.js';
import * as qrcode from 'qrcode-terminal';
import { resolve } from 'path';
import dotenv from 'dotenv';

var cron = require('node-cron');

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
client.on('authenticated', () => {
  cron.schedule('0 8 * * 1-5', () => {
    client.sendMessage('5513991543069@c.us', 'Bom dia mãe, te amo').then(() => {
      console.log('Mensagem para mãe enviada com sucesso!');
    });

    client.sendMessage('5513981219910@c.us', 'Bom dia pai, te amo').then(() => {
      console.log('Mensagem para pai enviada com sucesso!');
    });

    client.sendMessage('5513981529487@c.us', 'Boom dia nenem').then(() => {
      console.log('Mensagem para Amor enviada!');
    });
  });
  console.log('WhatsApp authenticated.')
});
client.on('auth_failure', () => console.log('WhatsApp authentication failed.'));
client.on('disconnected', () => console.log('WhatsApp lost connection.'));


client.initialize();

export { client, MessageMedia };