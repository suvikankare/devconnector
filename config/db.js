const mongoose = require('mongoose');
const config = require('config');
const db = config.get('mongoURI');

// async: return value of this function in a promise
const connectDB = async () => {
  try {
    // await: wait for a promise to be resolved or rejected before continuing. Terminal threw errors, they are fixed in the braces
    await mongoose.connect(db, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false
    });
    console.log('MongoDB Connected...');
  } catch (err) {
    console.error(err.message);
    // Exit process with failure
    process.exit(1);
  }
};

module.exports = connectDB;
