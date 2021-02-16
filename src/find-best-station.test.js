/* globals describe, test, expect */

const findBestStation = require('./find-best-station');

describe('findBestStation()', () => {
  test('Finds the most powerful station of several at the same location', () => {
    const device = [0, 0];
    const stations = [
      [0, 0, 1],
      [0, 0, 10],
      [0, 0, 7],
      [0, 0, 3],
    ];

    const bestStation = findBestStation(stations, device);
    expect(bestStation).toEqual(stations[1]);
  });

  test('Finds the most powerful station of several at the same distance', () => {
    const device = [5, 5];
    const stations = [
      [0, 0, 101],
      [5, 10, 107],
      [10, 5, 110],
      [5, 0, 103],
    ];

    const bestStation = findBestStation(stations, device);
    expect(bestStation).toEqual(stations[2]);
  });

  test('Finds the closest station of several with the same reach', () => {
    const device = [0, 0];
    const stations = [
      [2, 4, 50],
      [4, 4, 50],
      [6, 6, 50],
      [2, 2, 50],
    ];

    const bestStation = findBestStation(stations, device);
    expect(bestStation).toEqual(stations[3]);
  });

  test('Finds nothing if all stations are out of reach', () => {
    const device = [0, 0];
    const stations = [
      [10, 10, 1],
      [100, 100, 10],
      [3, 3, 1],
    ];

    const bestStation = findBestStation(stations, device);
    expect(bestStation).toBeUndefined();
  });

  test('Works with negative coordinates', () => {
    const device = [-5, -5];
    const stations = [
      [-15, -10, 10],
      [-10, -100, 10],
      [-20, -20, 10],
      [-10, -10, 10],
    ];

    const bestStation = findBestStation(stations, device);
    expect(bestStation).toEqual(stations[3]);
  });
});
