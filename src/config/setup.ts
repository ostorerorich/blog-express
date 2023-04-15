import { connect } from 'mongoose'
import { MONGO_URL } from './dotenv'
import { CategoryModel } from '../models/category.model'
import { PostModel } from '../models/post.model'
import { UserModel } from '../models/user.model'
import { RoleModel } from '../models/rol.model'
import { CommentModel } from '../models/comment.model'
import chalk from 'chalk'

const error = chalk.bold.red
const success = chalk.bold.green
const message = chalk.bold.blue

const models = [
  { name: 'Post', model: PostModel },
  { name: 'Category', model: CategoryModel },
  { name: 'User', model: UserModel },
  { name: 'Role', model: RoleModel },
  { name: 'Comment', model: CommentModel },
]

const roles = [
  { _id: 1, name: 'admin' },
  { _id: 2, name: 'user' },
]

const categories = [
  { _id: 1, name: 'NodeJS' },
  { _id: 2, name: 'ReactJS' },
  { _id: 3, name: 'Angular' },
  { _id: 4, name: 'VueJS' },
]

const setup = async () => {
  try {
    console.log(message(' *** Setup Started ***'))
    await connect(<string>MONGO_URL)
    console.log(success(' --> Database Connected ***'))

    for (const { name, model } of models) {
      await model.createCollection()
      console.log(success(` --> ${name} collection created`))
    }
    await RoleModel.insertMany(roles)
    console.log(success(` --> Roles created`))

    await CategoryModel.insertMany(categories)
    console.log(success(` --> Categories created`))

    console.log(message(` *** Setup completed ***`))

    process.exit(0)
  } catch (err) {
    console.log(error(err))
    process.exit(1)
  }
}

setup()
