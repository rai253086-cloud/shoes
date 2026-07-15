// Updated Reactions.js for SubZero-MD
import axios from 'axios';
import config from '../config.js';

const reactionEmojis = {
    'cry': '😭', 'hug': '🤗', 'kiss': '😘', 'slap': '💥', 
    'punch': '👊', 'wink': '😉', 'poke': '👉', 'dance': '💃',
    'blush': '😳', 'cringe': '😬', 'smile': '😊'
};

const reactions = ['cry', 'hug', 'kiss', 'slap', 'punch', 'wink', 'poke', 'dance', 'blush', 'cringe', 'smile'];

const reactionCommands = reactions.map(action => ({
    command: action,
    category: 'reactions',
    description: `Send a ${action} reaction`,
    usage: `.${action}`,
    async handler(m, conn, args) {
        try {
            // Using a more stable API endpoint
            const { data } = await axios.get(`https://api.waifu.pics/sfw/${action}`);
            
            const emoji = reactionEmojis[action] || '✨';
            await conn.sendMessage(m.chat, {
                image: { url: data.url },
                caption: `${emoji} *${action.toUpperCase()}*\n\n${config.footer}`
            }, { quoted: m });
        } catch (e) {
            await conn.sendMessage(m.chat, { text: '❌ *Failed to fetch image. API might be down.*' }, { quoted: m });
        }
    }
}));

export default [...reactionCommands];
