const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const dbConnection = require("./config/db.js");
const router = require("./routes/adminRoute.js");
const adminRoutes = require("./routes/adminRoute.js");
const cartRoutes = require("./routes/cartRoutes.js");
const authRoutes = require("./routes/authRoute.js");
const productRouter = require("./routes/productRoute.js");

dotenv.config();

const app = express();

app.use(express.json());
app.use(cors());
// app.use(router);

app.use("/api/auth", authRoutes);
app.use("/api/cart", cartRoutes);
app.use("/api/admin", adminRoutes);
app.use("/api", productRouter);

app.use('/.well-known/appspecific/com.chrome.devtools.json', (req, res) => {
  res.status(404).send('Not Found');
});
app.get("/", (req, res) => {
  res.send("Hello, MERN Stack!");
});

app.listen(5000, () => {
  console.log("Server is running on port 5000");
  dbConnection();
});
