import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import { dbConnect } from './config/dbConfig.js';
import StudentRouter from './routes/StudentRoutes.js';
// npm i express dotenv cors mongoose



dotenv.config();

const app = express()

app.use(cors());
app.use(express.json())
app.use('/api/student', StudentRouter)

app.get('/get-response', (req, res) => {
  res.send('Hello, Akash Raj!')
})


dbConnect();

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`)
})