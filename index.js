// Yêu cầu thư viện discord.js
const { Client, GatewayIntentBits } = require('discord.js');

// Khởi tạo một client (bot) mới
// Chúng ta cần chỉ định "Intents" (ý định) mà bot của bạn cần
const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,           // Cần để bot nhận thông tin về server
    GatewayIntentBits.GuildMessages,    // Cần để bot nhận thông tin tin nhắn
    GatewayIntentBits.MessageContent    // Cần để bot đọc được nội dung tin nhắn (như !ping)
  ]
});

// Lấy Token từ "Biến Môi Trường" (Environment Variable)
// Đây là cách an toàn nhất, host của bạn sẽ cung cấp biến này
const token = process.env.BOT_TOKEN;

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
    // Bot sẽ trả lời lại "Pong!"
    message.reply('Pong!');
  }
});

// Đăng nhập vào Discord bằng Token của bạn
client.login(token);