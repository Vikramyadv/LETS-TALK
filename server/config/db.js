const mongoose = require("mongoose");
const colors = require("colors");

const connectDB = async () => {
  try {
    const MONGODB_URI = `mongodb+srv://${process.env.MONGO_URI_USERNAME}:${process.env.MONGO_URI_PASSWORD}@${process.env.MONGO_URI_CLUSTER_ID}.mongodb.net/?retryWrites=true&w=majority`;
    const conn = await mongoose.connect(MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log(`MongoDb Connected: ${conn.connection.host}`.cyan.underline);
  } catch (error) {
    console.log(`Error: ${error.message}`.red.bold);
    process.exit();
  }
};

module.exports = connectDB;
