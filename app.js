var express= require('express')
var path= require('path')
var loginRoutes=require('./routes/login')
var app= express()

app.use(express.static(path.join(__dirname,"public")))

app.use('/',loginRoutes)

app.listen(3000,
    console.log("Server is running"));