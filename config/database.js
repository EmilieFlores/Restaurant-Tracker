const mongoose = require('mongoose')

const connectDB = async () => {
    try {
        mongoose.set('strictQuery', false)
        const conn = await mongoose.connect(
            process.env.CTION
        )
        console.log(`Connected to Database`)
    } catch (err) {
        console.error(err)
        process.exit(1)
    }
}

module.exports = connectDB






