const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const userRoutes = require("./routes/userRoutes");
const cookieParser = require("cookie-parser");
const db = require("./config/db");

const app = express();
dotenv.config();
const port = process.env.PORT;
db();

//Middlewares
app.use(express.json({ limit: "16mb" }));
app.use(express.urlencoded({ extended: true }, { limit: "10mb" }));
app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  })
);
app.use(express.static("public"));
app.use(cookieParser());

//Routes
app.use("/api/user", userRoutes);

//Server initialisation
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
