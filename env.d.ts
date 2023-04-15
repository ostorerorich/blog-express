declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NODE_ENV: 'development' | 'production' | 'test'
      PORT: number
      MONGO_URL: string
      JWT_TOKEN: string
    }
  }
}
