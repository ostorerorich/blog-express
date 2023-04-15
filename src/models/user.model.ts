import { model, Schema } from 'mongoose'
import bcrypt from 'bcrypt'
import { nanoid } from 'nanoid'
import { User } from '../interfaces/models.interface'

export const UserSchema = new Schema<User>(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: Number,
      required: true,
      ref: 'Role',
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
)

UserSchema.methods.encryptPassword = async (
  password: string
): Promise<string> => {
  const salt = await bcrypt.genSalt(10)
  return bcrypt.hash(password, salt)
}

UserSchema.methods.validatePassword = async function (
  password: string,
  reqPassword: string
): Promise<boolean> {
  return bcrypt.compare(reqPassword, password)
}

export const UserModel = model('User', UserSchema)
