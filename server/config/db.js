const mongoose = require('mongoose')



const connectDB = async()=>{
    try {
        const jud =  await mongoose.connect(process.env.MONGO_URI);
        console.log( ` databse Connected SUccesfully `)

    } catch (error) {
        console.log(`Mongodb database connection ${error}   so first solve it `)
    }
}

module.exports =connectDB;