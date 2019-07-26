const express = require('express');
const authRouter = require('./sleeps');

const router = express.Router();

router.use('/', authRouter);

module.exports = router;