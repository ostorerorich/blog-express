import { Router } from 'express'

export const postRouter = Router()

postRouter.get('/', (req, res) => {
  res.send('Hello World')
})
