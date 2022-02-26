
function randomInteger(min, max) {
  const rand = min - 0.5 + Math.random() * (max - min + 1);
  return Math.round(rand);
}
randomInteger(0, 3);


function getLengthComparison (lineLength, maxLineLength) {
  return (lineLength <= maxLineLength);
}
getLengthComparison(25, 140);
