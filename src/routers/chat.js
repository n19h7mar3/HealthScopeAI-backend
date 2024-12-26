const express = require('express');
const router = express.Router();

router.use(express.json);
router.use(require('../middlewares/validateJWT'));

router.post('/createNewChat', (req, res) => {
    res.send("auth baby");
});

module.exports = router;
