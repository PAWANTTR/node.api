const express=require("express")
const app=express()
//route
app.get('/',(req,res)=>{
    res.send('hello matoherfucker')

})
app.listen(3000,()=>{
    console.log('Server is running on port 3000')
})