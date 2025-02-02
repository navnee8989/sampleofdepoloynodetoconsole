const express = require("express")
require("dotenv").config()


const app = express()

app.get("/done",()=>{
    console.log("hits done")
})

app.get("/",()=>{
    console.log("hits home")
})

const PORT = process.env.PORT || 2589
app.listen(PORT,()=>{
    console.log(`server start using this port ${PORT}`)
})
