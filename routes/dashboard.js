const express = require('express');

const dashboardRouter = express.Router();

const {
    simulatePurchase
} = require('../controllers/dashboard');

dashboardRouter.post('/buy', simulatePurchase);

module.exports = dashboardRouter;