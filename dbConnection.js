
const { Client } = require('pg');

async function connectDB() {

    const client = new Client({
        host: '122.175.46.149',
        port: 3006, 
        user: 'postgres',
        password: 'm9JB17vmrNdWU3Nk',
        database: 'astls',
        ssl: false
    });

    try {
        await client.connect();
        console.log('✅ Connected to PostgreSQL Database');
        return client;
    } catch (error) {
        console.error('❌ Database Connection Failed');
        console.error(error);
        throw error;
    }
}

module.exports = { connectDB };