const express = require('express');
const genController = require('./../controllers/genController');

const router = express.Router();

router.route('/ControllerData').get(genController.getControllerData);

router
  .route('/Device')
  .get(genController.getAllDevice)
  .post(genController.createDevice);

// router
//   .route('/')
//   .get(userController.getAllUsers)
//   .post(userController.createUser);

// router
//   .route('/:id')
//   .get(userController.getUser)
//   .patch(userController.updateUser)
//   .delete(userController.deleteUser);

module.exports = router;
