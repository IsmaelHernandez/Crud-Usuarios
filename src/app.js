const express = require('express')

const app = express()
const port = 9000
const userRouter = require('./users/users.router')

//?Para que nuestra app acepte formato json 
app.use(express.json())

app.get('/', (req, res) => {
    res.status(200).json({message: 'Ok!'})
})

app.use('/api', userRouter)

app.listen(port, () => {
    console.log(`Server started at port ${port}`)
})