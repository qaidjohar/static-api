const controllerDataResponse = require('../dev-data/data/controllerDataResponse.json');
const deviceDataResponse = require('../dev-data/data/deviceData.json');

exports.getControllerData = (req, res) => {
  res.status(200).json(controllerDataResponse);
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
