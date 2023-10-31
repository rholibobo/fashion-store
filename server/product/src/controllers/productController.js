const { Product } = require('../models/productModel');
const { MessageBroker } = require('../utils/messageBrocker');
const uuid = require('uuid');
const {
    createAProduct,
    getProductById,
    getProducts
} = require('../services/productService');

const messageBrocker = new MessageBroker();
const ordersMap = new Map();



const createProduct = async (req, res, next) => {
    try {
        console.log(req.body);
        const product = new Product(req.body);

        const validationError = product.validateSync();
        if (validationError) {
            return res.status(400).json({ message: validationError.message });
        }

        await product.save({ timeout: 30000 });

        res.status(201).json(product);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server error" });
    }
};

const createOrder = async (req, res, next) => {
    try {
        const token = req.headers.authorization;
        if (!token) {
            return res.status(401).json({ message: "Unauthorized" });
        }

        const { ids } = req.body;
        const products = await Product.find({ _id: { $in: ids } });

        const orderId = uuid.v4(); // Generate a unique order ID
        ordersMap.set(orderId, {
            status: "pending",
            products,
            username: req.user.username
        });

        await messageBrocker.publishMessage("orders", {
            products,
            username: req.user.username,
            orderId, // include the order ID in the message to orders queue
        });

        messageBrocker.consumeMessage("products", (data) => {
            const orderData = JSON.parse(JSON.stringify(data));
            const { orderId } = orderData;
            const order = ordersMap.get(orderId);
            if (order) {
                // update the order in the map
                ordersMap.set(orderId, { ...order, ...orderData, status: 'completed' });
                console.log("Updated order:", order);
            }
        });

        // Long polling until order is completed
        let order = ordersMap.get(orderId);
        while (order.status !== 'completed') {
            await new Promise(resolve => setTimeout(resolve, 1000)); // wait for 1 second before checking status again
            order = ordersMap.get(orderId);
        }

        // Once the order is marked as completed, return the complete order details
        return res.status(201).json(order);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server error" });
    }
}


const getOrderStatus = async (req, res, next) => {
    const { orderId } = req.params;
    const order = ordersMap.get(orderId);
    if (!order) {
        return res.status(404).json({ message: 'Order not found' });
    }
    return res.status(200).json(order);
}

const getAllProducts = async (req, res, next) => {
    try {
        const token = req.headers.authorization;
        if (!token) {
            return res.status(401).json({ message: "Unauthorized" });
        }
        const products = await Product.find({});

        res.status(200).json(products);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server error" });
    }
}

module.exports = {
    createOrder,
    getAllProducts,
    getOrderStatus,
    createProduct
};