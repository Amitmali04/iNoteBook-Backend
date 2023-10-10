const { config } = require('dotenv')
const express = require('express')
const app = express()
config();

require('./Connection/db');

const PORT = process.env.PORT ||8000

app.use(express.json())

app.use('/api/auth', require('./Routes/auth'))
app.use('/api/notes', require('./Routes/notes'))



app.listen(PORT, () =>{
console.log(`App Running Port Numbber ${PORT}`)
})