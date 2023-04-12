import { connect } from 'mongoose'
import { MONGO_URL } from './dotenv'
export const dbConnection = async (): Promise<void> => {
  try {
    await connect(`${MONGO_URL}`, {})
    console.log('Database connected')
  } catch (error) {
    console.log(error)
  }
}
