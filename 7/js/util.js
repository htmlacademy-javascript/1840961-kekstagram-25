//Генерация числа из массива

function getRandomPositiveInteger (a, b) {
  const lower = Math.ceil(Math.min(Math.abs(a), Math.abs(b)));
  const upper = Math.floor(Math.max(Math.abs(a), Math.abs(b)));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
}

// Функция для проверки максимальной длины строки.

function checkStringLength (string, length) {
  return string.length <= length;
}

checkStringLength('строка', 5);

// Функция закрытия окна по Escape

const getEscapeEvent = (evt, action) => {
  if (evt.key === 'Escape') {
    action();
  }
};

export {getRandomPositiveInteger};
export {checkStringLength};
export {getEscapeEvent};
