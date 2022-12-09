const mongoose=require('mongoose')
const connectdb=async()=>{
try {
    await mongoose.connect(process.env.mongoURL)
    console.log('data base is connected')
} catch (error) {
    console.log(error)
}

}

module.exports=connectdb