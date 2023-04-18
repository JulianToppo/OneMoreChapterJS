var app= require('express')
var router=app.Router()
var loginController= require('../controller/loginController')

router.get('/',loginController.getHomePage)

module.exports=router