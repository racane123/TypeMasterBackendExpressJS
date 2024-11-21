import express from 'express'

const router = express.Router()


router.post('/scores', async(req,res)=>{
    const {name, score} = req.body
    const inserScores = `INSERT INTO scoreboard(name,score) VALUES ($1,$2)`

    try {
        
    } catch (error) {
        console.error(error.stack)
    }
})



export default router