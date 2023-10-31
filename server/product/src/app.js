const express = require("express");
const mongoose = require("mongoose");
const config = require("./config");
const { MessageBroker } = require("./utils/messageBrocker");
const { router } = require("./routes/productRoute");
const cookieParser = require('cookie-parser');
require("dotenv").config();

class App {
  constructor() {
    this.app = express();
    this.connectDB();
    this.setMiddlewares();
    this.setRoutes();
    this.setupMessageBroker();
  }

  async connectDB() {
    await mongoose.connect(config.mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Product MongoDB connected successfully");
  }

  async disconnectDB() {
    await mongoose.disconnect();
    console.log("MongoDB disconnected");
  }

  setMiddlewares() {
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: false }));
    this.app.use(cookieParser());
  }

  setRoutes() {
    this.app.use("/api/products", router);
  }

  setupMessageBroker() {
    let messageBrocker = new MessageBroker()
    messageBrocker.connect();
    // MessageBroker.connect();
  }

  start() {
    this.server = this.app.listen(5001, () =>
      console.log("Server started on port 5001")
    );
  }

  async stop() {
    await mongoose.disconnect();
    this.server.close();
    console.log("Server stopped");
  }
}

module.exports = { App };
