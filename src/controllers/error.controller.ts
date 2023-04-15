import { Request, Response } from 'express'

export class ErrorController {
  notFound(req: Request, res: Response): Response {
    try {
      return res.status(404).json({ message: 'Error 404 - Not Found' })
    } catch (error) {
      return res.status(500).json({ message: error })
    }
  }
}
