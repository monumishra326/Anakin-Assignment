
const express = require("express");
const dotenv = require("dotenv");
const connect = require("./configs/db");
const cors = require("cors");


const authRoute = require("./routes/authRoute");
const userRoute = require("./routes/userRoute");
const restaurantRoute = require("./routes/restaurantRoute");
const orderRoute = require("./routes/orderRoute");


dotenv.config();
const app = express();



app.use(cors());
app.use(express.json());



app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/res", restaurantRoute);
app.use("/api/order", orderRoute);



const port = process.env.PORT || 5000;

app.listen(port, async function () {
  await connect();

  console.log("listening to port:", port);
});
