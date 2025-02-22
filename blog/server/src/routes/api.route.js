const express = require('express')
const router = express.Router();

class Controller {
    index(req, res, next) {
        res.render('/home')
    }
}
const controller = new Controller();
router.get('/', controller.index);

module.exports = router;