const express = require('express');
const Order = require('../models/Order');
const router = express.Router();

// Process payment
router.post('/process', async (req, res) => {
  try {
    const { orderId, paymentMethod, paymentDetails } = req.body;

    const order = await Order.findById(orderId);
    if (!order) {
      return res.status(404).json({ success: false, message: 'Order not found' });
    }

    if (paymentMethod === 'Cash') {
      order.paymentStatus = 'Pending';
    } else if (paymentMethod === 'UPI' || paymentMethod === 'Card') {
      order.paymentStatus = 'Pending';
      order.paymentId = paymentDetails?.paymentId || '';
    }

    await order.save();

    res.status(200).json({
      success: true,
      message: 'Payment processed successfully',
      data: order
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

// Verify payment
router.post('/verify', async (req, res) => {
  try {
    const { orderId, paymentId } = req.body;

    const order = await Order.findById(orderId);
    if (!order) {
      return res.status(404).json({ success: false, message: 'Order not found' });
    }

    order.paymentStatus = 'Completed';
    order.paymentId = paymentId;

    await order.save();

    res.status(200).json({
      success: true,
      message: 'Payment verified successfully',
      data: order
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

module.exports = router;
