const router = require('express').Router();
const { getSleeps, addSleep, updateSleep, deleteSleep } = require('../controllers/sleeps');

router.get('/', getSleeps);

router.post('/', addSleep);

router.put('/:id', updateSleep);

router.delete('/:id', deleteSleep);

module.exports = router;