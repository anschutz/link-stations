/* eslint-disable no-console */

/**
 * Returns the station's power in relation to the device using the formula:
 * (reach - distance)^2.
 * Returns 0 if the station is out of reach.
 * @param {number} reach - The station's reach.
 * @param {number} distance - The distance between the station and device.
 * @returns {number} The station's power in relation to the device.
 */
const getPower = (reach, distance) =>
  distance > reach ? 0 : (reach - distance) ** 2;

/**
 * Returns the distance between the station and device using the Pythagorean theorem:
 * sqrt((stationX - deviceX)^2 + (stationY - deviceY)^2).
 * @param {number} stationX - The x-coordinate of the station.
 * @param {number} stationY - The y-coordinate of the station.
 * @param {number} deviceX - The x-coordinate of the device.
 * @param {number} deviceY - The y-coordinate of the device.
 * @returns {number} The distance between the station and device.
 */
const getDistance = (stationX, stationY, deviceX, deviceY) =>
  Math.sqrt((stationX - deviceX) ** 2 + (stationY - deviceY) ** 2);

/**
 * Returns and logs the information about the most suitable station for the given device, if any.
 * @param {Array} stations - The list of stations.
 * @param {Array} device - The device.
 * @returns {Array} The most suitable station, if any. Undefined otherwise.
 */
function findBestStation(stations, device) {
  const [deviceX, deviceY] = device;

  // Sorts stations in desc order based on power.
  const sortedStations = stations
    .map((station, idx) => {
      const [stationX, stationY, reach] = station;
      const distance = getDistance(stationX, stationY, deviceX, deviceY);
      const power = getPower(reach, distance);

      return { x: stationX, y: stationY, reach, power, idx };
    })
    .sort((a, b) => b.power - a.power);

  const [bestStation] = sortedStations;

  if (bestStation.power) {
    console.log(
      `Best link station for point ${deviceX},${deviceY} is ${bestStation.x},${bestStation.y} with power ${bestStation.power}`
    );
  } else {
    console.log(`No link station within reach for point ${deviceX},${deviceY}`);
  }

  // Mainly for tests.
  return bestStation.power ? stations[bestStation.idx] : undefined;
}

module.exports = findBestStation;
