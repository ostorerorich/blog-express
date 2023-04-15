import * as dotenv from 'dotenv'
dotenv.config()
export const { PORT, MONGO_URL, JWT_TOKEN } = process.env
