import dotenv from 'dotenv';
dotenv.config()

export default{
    port: process.env.USER_PORT,
    dataurl: process.env.DATABASE_URL
};