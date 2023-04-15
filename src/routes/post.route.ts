import { Router } from 'express'
import { PostController } from '../controllers/post.controller'

const postController = new PostController()

const postRouter = Router()

postRouter.get('/api', async (req, res) => {
  res.status(200).json({ message: 'prueba' })
})

postRouter.post('/create', postController.create)
postRouter.get('/all', postController.getAll)

export default postRouter
