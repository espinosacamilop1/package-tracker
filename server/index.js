const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express()
const apiPort = 5000;

const db = require('./db')

const employeeRouter = require('./routes/employee-router')


app.use(bodyParser.urlencoded({extended : true}))
app.use(cors())
app.use(bodyParser.json())

db.on('error', console.error.bind(console, 'MongoDB connection error:'))


app.get('/', (req, res)=>{
    res.send('Hello World')
})


app.use('/api', employeeRouter)

app.listen(apiPort, () => console.log(`server running on port ${apiPort}`))