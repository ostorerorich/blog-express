import { Schema, model } from 'mongoose'
import { Comment } from '../interfaces/models.interface'

const CommentSchema = new Schema<Comment>(
  {
    _id: {
      type: String,
      required: true,
      ref: 'User',
    },
    postId: {
      type: String,
      required: true,
      ref: 'Post',
    },
    content: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
)

export const CommentModel = model('Comments', CommentSchema)
