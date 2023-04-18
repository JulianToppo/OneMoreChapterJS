var path= require('path')

var getHomePage= async(req,res,next)=>{
    try {
        console.log("inside getHomePage")
        res.sendFile(path.join(__dirname,"..","views","home.html"))
    } catch (error) {
        res.status(500).json({Error:error})
    }
}

module.exports={
    getHomePage,
}