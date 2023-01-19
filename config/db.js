const mongoose = require("mongoose");
// Connect to the database
const connectDB = async () => {
  const conn = await mongoose.connect(process.env.DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  console.log(`MongoDB холбогдлоо -->>> [ ${conn.connection.host} ]`);
};

module.exports = connectDB;
