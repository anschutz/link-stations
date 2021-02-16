const findBestStation = require('./src/find-best-station');

// [x, y, reach]
const stations = [
  [0, 0, 10],
  [20, 20, 5],
  [10, 0, 12],
];

// [x, y]
const devices = [
  [0, 0],
  [100, 100],
  [15, 10],
  [18, 18],
];

devices.forEach((device) => findBestStation(stations, device));
