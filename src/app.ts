import express from 'express'
import cors from 'cors'
import { json, urlencoded } from 'body-parser'
import authorRoutes from './routes/authorRoutes'
import bookRoutes from './routes/bookRoutes'
import userRoutes from './routes/userRoutes'
import sequelize from './config/database'
import dotenv from 'dotenv'

dotenv.config()

const app = express()

// Middleware
app.use(cors())
app.use(json())
app.use(urlencoded({ extended: true }))

// Routes
app.use('/api/v1', authorRoutes)
app.use('/api/v1', bookRoutes)
app.use('/api/v1', userRoutes)


// Database connection
sequelize
  .authenticate()
  .then(() => {
    console.log('Database connected...')
  })
  .catch((err: Error) => {
    console.error('Unable to connect to the database:', err)
  })

export default app
