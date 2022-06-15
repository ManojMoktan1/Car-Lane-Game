function getRandomFromRange(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

function getIndexFromRange() {
  return getRandomFromRange(0, 3);
}
