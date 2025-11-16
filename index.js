// Yêu cầu thư viện discord.js
const { Client, GatewayIntentBits } = require('discord.js');

const config = require('./config.json'); // Đọc file config
const token = config.BOT_TOKEN;          // Lấy token từ file đó

// Khởi tạo một client (bot) mới
const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent
  ]
});

// Khi bot đã sẵn sàng (online)
client.on('ready', () => {
  console.log(`Bot da online! Ten la: ${client.user.tag}`);
});

// Khi bot nhận được một tin nhắn
client.on('messageCreate', message => {
  // Nếu tin nhắn được gửi bởi một con bot khác, bỏ qua
  if (message.author.bot) return;

  // Nếu nội dung tin nhắn chính xác là "!ping"
  if (message.content === '!ping') {
    message.reply('Pong!');
  }
});

// Đăng nhập vào Discord bằng Token đã lấy
if (!token) {
  console.error('Loi: Khong tim thay token! Ban da upload file config.json chua?');
} else {
  client.login(token);
}