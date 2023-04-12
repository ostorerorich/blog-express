import { Request, Response } from 'express'

export class PostController {
  async create(req: Request, res: Response) {
    try {
      let { title, content } = req.body

      if (!title || !content) {
        return res
          .status(400)
          .json({ message: 'Title and content are required' })
      }
    } catch (error) {}
  }

  async show() {}

  async getAll() {}

  async getOne() {}

  async updateOne() {}

  async deleteOne() {}

  async searchPosts() {}

  async getPostsByCategory() {}

  async getPostsByUser() {}
}
