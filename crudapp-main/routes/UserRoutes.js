const express = require('express');
const UserController = require('../controllers/UserController');

// Initialize express router
const router = express.Router();

router.route('/').post(UserController.createUser).get(UserController.getUsers);
router.route('/:id').get(UserController.getUser).patch(UserController.updateUser).delete(UserController.deleteUser);

module.exports = router;
