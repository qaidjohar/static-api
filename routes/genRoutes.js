const express = require('express');
const genController = require('./../controllers/genController');

const router = express.Router();

router.route('/ControllerData').get(genController.getControllerData);
router
  .route('/ControllerData/getsingle/:id')
  .get(genController.getSingleControllerData);

router
  .route('/Device')
  .get(genController.getAllDevice)
  .post(genController.createDevice)
  .put(genController.updateDevice);

router.route('/Device/:id').delete(genController.deleteDevice);

router.route('/User/validateUser/:username/:password').get(genController.login);
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
