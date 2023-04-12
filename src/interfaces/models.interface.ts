export interface Post {
  title: string
  content: string
  user: User | string
  category: Category | string
  slug: string
  image: string
}

export interface User {
  _id: string
  name: string
  email: string
  password: string
  role: string
}

export interface Category {
  _id: number
  name: string
}

export interface Comment {
  _id: string
  postId: Post | string
  content: string
  user: User | string
}

export type Role = Pick<Category, '_id' | 'name'>
