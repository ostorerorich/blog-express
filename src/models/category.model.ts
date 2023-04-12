import { Schema, model } from 'mongoose'
import { Category } from '../interfaces/models.interface'

const CategorySchema = new Schema<Category>(
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

export const CategoryModel = model('Category', CategorySchema)
