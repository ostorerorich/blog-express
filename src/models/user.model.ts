import { model, Schema } from 'mongoose'
import bcrypt from 'bcrypt'
import { nanoid } from 'nanoid'
import { User } from '../interfaces/models.interface'

const UserSchema = new Schema<User>(
  {
    _id: {
      type: String,
      required: true,
      default: () => nanoid(10),
    },
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
      type: String,
      required: true,
      default: 'user',
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
  password: string
): Promise<boolean> {
  return bcrypt.compare(password, this.password)
}

export const UserModel = model('User', UserSchema)
