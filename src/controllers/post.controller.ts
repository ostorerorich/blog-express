import { Request, Response } from 'express'
import { PostModel } from '../models/post.model'

export class PostController {
  async create(req: Request, res: Response): Promise<Response> {
    try {
      const { title, content, user, category, image } = req.body

      const newPost = new PostModel({
        title,
        content,
        user,
        category,
        image,
      })

      const postSaved = await newPost.save()

      return res.status(201).json(postSaved)
    } catch (error) {
      return res.status(500).json(error)
    }
  }

  async show(req: Request, res: Response): Promise<Response> {
    try {
      const { id } = req.params

      const post = await PostModel.findById(id).populate('user', 'name')

      return res.status(200).json(post)
    } catch (err) {
      return res.status(400).json({ message: 'Error getting post' })
    }
  }

  async getAll(req: Request, res: Response): Promise<Response> {
    try {
      const posts = await PostModel.find({}).populate('user', 'name')
      return res.status(200).json(posts)
    } catch (error) {
      return res.status(400).json({ message: 'Error getting posts' })
    }
  }

  async updateOne() {}

  async deleteOne(req: Request, res: Response): Promise<Response> {
    try {
      const { id } = req.params

      const postDeleted = await PostModel.findByIdAndDelete(id)

      return res.status(200).json(postDeleted)
    } catch (error) {
      return res.status(400).json({ message: 'Error deleting post' })
    }
  }

  async searchPosts(req: Request, res: Response) {
    try {
      const { text } = req.params

      const posts = await PostModel.find({
        $or: [
          { title: { $regex: text, $options: 'i' } },
          { content: { $regex: text, $options: 'i' } },
        ],
      })

      return res.status(200).json(posts)
    } catch (error) {
      return res.status(400).json({ message: 'Error searching posts' })
    }
  }

  async getPostsByCategory(req: Request, res: Response): Promise<Response> {
    try {
      const { category } = req.params

      const post = await PostModel.find({ $where: category }).populate(
        'user',
        'name'
      )

      return res.status(200).json(post)
    } catch (error) {
      return res.status(400).json({ message: 'Error getting posts' })
    }
  }

  async getPostsByUser(req: Request, res: Response): Promise<Response> {
    try {
      const { user } = req.params

      const post = await PostModel.find({ $where: user }).populate(
        'user',
        'name'
      )

      return res.status(200).json(post)
    } catch (error) {
      return res.status(400).json({ message: 'Error getting posts' })
    }
  }
}
