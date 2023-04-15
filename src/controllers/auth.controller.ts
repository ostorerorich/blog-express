import { Request, Response } from 'express'
import { UserModel, UserSchema } from '../models/user.model'

export class AuthController {
  async register(req: Request, res: Response): Promise<Response> {
    try {
      const { name, email, password, role } = req.body

      const newUser = new UserModel({
        name,
        email,
        password: await UserSchema.methods.encryptPassword(password),
        role,
      })

      const userSaved = await newUser.save()

      return res.status(201).json(userSaved)
    } catch (error) {
      return res.status(500).json(error)
    }
  }

  async login(req: Request, res: Response): Promise<Response> {
    try {
      const { email, password } = req.body

      const authDB = await UserModel.findOne({ email })

      const validPass = await UserSchema.methods.validatePassword(
        authDB?.password,
        password
      )

      return res.status(200).json({ authDB, validPass })
    } catch (err) {
      return res.status(500).json({ error: err })
    }
  }
}
