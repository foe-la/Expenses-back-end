const mongoose = require('mongoose');

const connectDB = async () => {
    try {
      const conn = await mongoose.connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true
      });
  
      console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline.bold);
    } catch (err) {
      console.log(`Error: ${err.message}`.red);
      process.exit(1);
    }
  }
  
  module.exports = connectDB;

// const database = async () => {
//     try {
//         mongoose.set('strictQuery', false)
//         await mongoose.connect(process.env.MONGO_URI)
//         console.log('Database connected')
//     } catch (error) {
//         console.log('error');
//     }
// }

// module.exports = database;
