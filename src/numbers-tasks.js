function getRectangleArea(width, height) {
  return width * height;
}

function getCircleCircumference(radius) {
  return 2 * Math.PI * radius;
}

function getAverage(value1, value2) {
  return (value1 + value2) / 2; // Среднее двух чисел
}

function getDistanceBetweenPoints(x1, y1, x2, y2) {
  return Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
}

function getLinearEquationRoot(a, b) {
  if (a === 0) throw new Error('a cannot be zero');
  return -b / a;
}

function getAngleBetweenVectors(x1, y1, x2, y2) {
  const dotProduct = x1 * x2 + y1 * y2;
  const magnitude1 = Math.sqrt(x1 ** 2 + y1 ** 2);
  const magnitude2 = Math.sqrt(x2 ** 2 + y2 ** 2);
  return Math.acos(dotProduct / (magnitude1 * magnitude2));
}

function getLastDigit(value) {
  return value % 10;
}

function parseNumberFromString(value) {
  return parseFloat(value);
}

function getParallelepipedDiagonal(a, b, c) {
  return Math.sqrt(a ** 2 + b ** 2 + c ** 2);
}

function roundToPowerOfTen(num, pow) {
  return Math.round(num / 10 ** pow) * 10 ** pow;
}

function isPrime(n) {
  if (n <= 1) return false;
  for (let i = 2; i <= Math.sqrt(n); i += 1) {
    if (n % i === 0) return false;
  }
  return true;
}

function toNumber(value, def) {
  const num = Number(value);
  return Number.isNaN(num) ? def : num;
}

function getCube(num) {
  return num ** 3;
}

function getFibonacciNumber(index) {
  if (index < 0) throw new Error('Index cannot be negative');
  let a = 0;
  let b = 1;
  for (let i = 0; i < index; i += 1) {
    const temp = a;
    a = b;
    b = temp + b;
  }
  return a;
}

function getSumToN(n) {
  return (n * (n + 1)) / 2;
}

function getSumOfDigits(num) {
  return num
    .toString()
    .split('')
    .reduce((sum, digit) => sum + Number(digit), 0);
}

function isPowerOfTwo(num) {
  return num > 0 && Math.log2(num) % 1 === 0;
}

function getSine(num) {
  return Math.sin(num);
}

function numberToStringInBase(number, base) {
  return number.toString(base);
}

function toExponential(number, fractionDigits) {
  return number.toExponential(fractionDigits);
}

function toFixed(number, fractionDigits) {
  return number.toFixed(fractionDigits);
}

function toPrecision(number, precision) {
  return number.toPrecision(precision);
}

function getNumberValue(number) {
  return Number(number); // Получаем примитивное значение числа
}

function isNumber(value) {
  return typeof value === 'number' && !Number.isNaN(value); // Проверка на число
}

function isInteger(number) {
  return Number.isInteger(number);
}

function getFloatOnString(str) {
  return parseFloat(str); // Получаем число с плавающей запятой
}

function getIntegerOnString(str, base) {
  return parseInt(str, base); // Получаем целое число в указанной системе счисления
}

function isSafeInteger(number) {
  return Number.isSafeInteger(number);
}

function roundToSmallestInteger(number) {
  return Math.floor(number); // Округление вниз
}

function roundToLargestInteger(number) {
  return Math.ceil(number); // Округление вверх
}

function roundToNearestInteger(number) {
  return Math.round(number); // Округление до ближайшего целого
}

function getIntegerPartNumber(number) {
  return Math.trunc(number); // Убираем дробную часть
}

function getSumOfNumbers(...numbers) {
  return numbers.reduce((sum, num) => sum + num, 0); // Суммируем все переданные числа
}

function getMaxNumber(firstNumber, secondNumber) {
  return Math.max(firstNumber, secondNumber); // Возвращаем наибольшее число
}

function getRandomInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min; // Генерация случайного целого числа
}

function getHypotenuse(a, b) {
  return Math.hypot(a, b); // Используем более оптимальный метод для вычисления гипотенузы
}

function getCountOfOddNumbers(number) {
  return Math.floor((number + 1) / 2); // Количество нечетных чисел
}

module.exports = {
  getRectangleArea,
  getCircleCircumference,
  getAverage,
  getDistanceBetweenPoints,
  getLinearEquationRoot,
  getAngleBetweenVectors,
  getLastDigit,
  parseNumberFromString,
  getParallelepipedDiagonal,
  roundToPowerOfTen,
  isPrime,
  toNumber,
  getCube,
  getFibonacciNumber,
  getSumToN,
  getSumOfDigits,
  isPowerOfTwo,
  getSine,
  numberToStringInBase,
  isSafeInteger,
  roundToLargestInteger,
  roundToSmallestInteger,
  roundToNearestInteger,
  getSumOfNumbers,
  isNumber,
  isInteger,
  toExponential,
  toFixed,
  toPrecision,
  getNumberValue,
  getFloatOnString,
  getIntegerOnString,
  getIntegerPartNumber,
  getMaxNumber,
  getRandomInteger,
  getHypotenuse,
  getCountOfOddNumbers,
};
