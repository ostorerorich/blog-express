import express from 'express'
import morgan from 'morgan'
import cors from 'cors'
import { dbConnection } from './config/dbconnection'
import { PORT } from './config/dotenv'

export async function app() {
  const app = express()

  // Middlewares
  app.use(morgan('dev'))
  app.use(cors())
  app.use(express.json())
  app.use(express.urlencoded({ extended: false }))
  app.use(express.static('src/resources/uploads'))

  dbConnection()

  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
  })
}
