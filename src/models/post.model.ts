import { Schema, model } from 'mongoose'
import { nanoid } from 'nanoid'
import { Post } from '../interfaces/models.interface'

const PostSchema = new Schema<Post>(
  {
    title: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    user: {
      type: Schema.Types.ObjectId,
      ref: 'User',
    },
    category: {
      type: Number,
      ref: 'Category',
    },
    slug: {
      type: String,
      required: true,
      default: () => nanoid(10),
    },
    image: {
      type: String,
      defult: 'https://picsum.photos/200/300',
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
)

export const PostModel = model('Post', PostSchema)
