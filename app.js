const express= require ('express')
// const mongoose = require ('mongoose')
const recipeRouter= require ('./routes/recipeRoute')
const { connectDB } = require('./config/db')

const app= express()
app.use( express.json())
connectDB()
app.use(cors())
app.use(logger)
app.use('/recipes', recipeRouter)

app.listen(5000 ,() =>
{
    console.log(`Server running on port 5000`);

})

