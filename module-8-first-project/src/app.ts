// const express = require('express')
import express, { Application, Request, Response } from 'express'
import cors from 'cors'
import { StudentRoute } from './modules/students/student.route'
const app: Application = express()
// parser
app.use(express.json())
app.use(cors())

// application routes
// api/v1/students/create-student ai route e jbe tokhon se akta student e data insert korte parbe. karon ata post metho..abar StudentRoute e get method o hoite pare. "/api/v1/students" atuk common thakbe,
// kono client ai
app.use('/api/v1/students', StudentRoute)

const getAController = (req: Request, res: Response) => {
  const a = 10

  res.send(a)
}

app.get('/', getAController)

export default app
