export default function analyzeArray(array) {
  const sum = array.reduce((total, num) => {
    return total + num;
  }, 0);
  const average = Math.round(sum / array.length);

  const min = Math.min(...array);

  const max = Math.max(...array);

  const length = array.length;

  return { average, min, max, length };
}
