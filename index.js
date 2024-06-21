const axios = require('axios');

const BOT_TOKEN = '7498347231:AAHpXN1mCYEE6QZJ0GTxGsuOYKxcbgzmMiE';
const CHAT_ID = '6628955512';
const MESSAGE = 'GOBLOK, MISKIN TRIK RECEH';

async function sendMessage() {
    const url = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage?parse_mode=markdown&chat_id=${CHAT_ID}&text=${MESSAGE}`;

    for (let i = 0; i < 1000; i++) {
        try {
            console.log(`Pesan ke - ${i + 1}`);


            const response = await axios.get(url);
            console.log(`Status - ${response.status}`);
            // console.log(`Message ${i + 1} sent:`, response.data);
        } catch (error) {
            console.error(`Error sending message ${i + 1}:`, error.response ? error.response.data : error.message);
        }
    }
}

sendMessage();
