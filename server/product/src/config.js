require("dotenv").config();

module.exports = {
  port: process.env.PORT,
  mongoURI: process.env.MONGODB_PRODUCT_URI,
  rabbitMQURI: process.env.RABBITMQ_URI || "amqp://localhost",
  exchangeName: "products",
  queueName: "products_queue",
};
