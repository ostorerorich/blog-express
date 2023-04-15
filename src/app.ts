import express from 'express'
import morgan from 'morgan'
import cors from 'cors'
import { dbConnection } from './config/dbconnection'
import { PORT } from './config/dotenv'
import postRouter from './routes/post.route'
import { authRouter } from './routes/auth.route'

export async function app() {
  const app = express()

  // Middlewares
  app.use(morgan('dev'))
  app.use(express.json())
  app.use(cors())
  app.use(express.urlencoded({ extended: false }))

  dbConnection()

  app.use('/api/post', postRouter)
  app.use('/api/auth', authRouter)

  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
  })
}
