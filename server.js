import express from 'express'
import dotenv from 'dotenv'
import { notFound, errorHandler } from './middlewares/errorMiddleware.js'
import userRoutes from './routes/userRoutes.js'
import connectDB from './config/db.js'
import cookieParser from 'cookie-parser'
import colors from 'colors'

dotenv.config()

connectDB()

const app = express()

// Parsing
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(cookieParser())

// Routes
app.use('/api/users', userRoutes)

app.get('/', (req, res) => {
  res.send('API is running...')
})

// Error handling
app.use(notFound)
app.use(errorHandler)

const port = process.env.PORT || 5000

app.listen(port, () => {
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${port}`.yellow.bold)
})
