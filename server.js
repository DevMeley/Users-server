const express = require('express')
const usersRouter = require('./route/users')
const app = express();
const PORT = 4000;

app.use(express.json())
app.use('/users', usersRouter)

app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`)
})