function seeSun(buildings, direction) {
  let result = [];
  let max = 0;
  let rev = buildings.reverse();
  if (direction === 'EAST') {
    for (let i = 0; i < buildings.length; i++) {
      if (buildings[i] > max) {
        max = buildings[i];
        result.push(i);
      }
    }
  }
  if (direction === 'WEST') {
    return result;
  } else {
    return result.reverse();
  }
}