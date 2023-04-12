import { model, Schema } from 'mongoose'
import { Role } from '../interfaces/models.interface'

const RoleSchema = new Schema<Role>(
  {
    _id: {
      type: Number,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: false,
    versionKey: false,
  }
)

export const RoleModel = model('Role', RoleSchema)
