const controllerDataResponse = require('../dev-data/data/controllerDataResponse.json');
const singleControllerDataResponse = require('../dev-data/data/singleControllerData.json');
const deviceDataResponse = require('../dev-data/data/deviceData.json');
const liveDeviceDataResponse = require('../dev-data/data/liveDeviceData.json');

exports.getLiveDevice = (req, res) => {
  res.status(200).json(liveDeviceDataResponse);
};

exports.getControllerData = (req, res) => {
  res.status(200).json(controllerDataResponse);
};

exports.getSingleControllerData = (req, res) => {
  res.status(200).json(singleControllerDataResponse);
};

exports.getAllDevice = (req, res) => {
  res.status(200).json(deviceDataResponse);
};

exports.createDevice = (req, res) => {
  res.status(200).send('"Added Successfully"');
};

exports.updateDevice = (req, res) => {
  res.status(200).send('"Updated Successfully"');
};

exports.deleteDevice = (req, res) => {
  console.log('Device Id:', req.params.id);
  res.status(200).send('"Deleted Successfully"');
};

exports.login = (req, res) => {
  console.log('Username:', req.params.username);
  console.log('Password:', req.params.password);
  res.status(200).send('1');
};

// exports.getAllTours = (req, res) => {
//   console.log(req.requestTime);

//   res.status(200).json({
//     status: 'success',
//     requestedAt: req.requestTime,
//     data: {
//       tours
//     }
//   });
// };
