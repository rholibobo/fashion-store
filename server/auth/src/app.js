const express = require("express");
const mongoose = require("mongoose");
const config = require("./config");
const authMiddleware = require("./middlewares/authMiddleware");
const AuthController = require("./controllers/authController");
const cookieParser = require('cookie-parser');

class App{
  constructor() {
    this.app = express();
    this.authController = new AuthController();
    this.connectDB();
    this.setMiddlewares();
    this.setRoutes();
  }

  async connectDB() {
    await mongoose.connect(config.mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(" Auth MongoDB connected successfully ");
  }

  async disconnectDB() {
    await mongoose.disconnect();
    console.log("Auth MongoDB disconnected successfully");
  }

  setMiddlewares() {
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: false }));
    this.app.use(cookieParser());
  }

  setRoutes() {
    this.app.post("/login", (req, res) => this.authController.login(req, res));
    this.app.post("/register", (req, res) => this.authController.register(req, res));
    this.app.get("/dashboard", authMiddleware, (req, res) => res.json({ message: "Welcome to dashboard" }));
  }

  start() {
    this.server = this.app.listen(5000, () => console.log("Server started on port 5000"));
  }

  async stop() {
    await mongoose.disconnect();
    this.server.close();
    console.log("Server stopped");
  }
}

module.exports = {App};
