const mongoose = require("mongoose");

module.exports = () => {
  return mongoose.connect(
    "mongodb+srv://monu:monu@cluster0.zbmw8.mongodb.net/?retryWrites=true&w=majority"
    
  );
};
