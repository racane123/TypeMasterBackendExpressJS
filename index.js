import express from 'express'
import dotenv from 'dotenv'
import leaderBoard from './router/leaderboard.js'
dotenv.config()
const port = process.env.PORT

const app = express()

app.use('/', leaderBoard)

app.listen(port, ()=> {
    console.log(`Server is listening at ${port}`)
})