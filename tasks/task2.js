// Задача: Написати функцію, яка приймає рядок і повертає його у зворотному порядку,
//  при цьому пропускаючи всі цифри.

function reverseWithoutNumbers(str) {
  let res = '';

  for (let i = str.length - 1; i >= 0; i--) {
    const ch = str[i];
    // перевірка на цифру без RegExp
    const isDigit = ch >= '0' && ch <= '9';
    if (!isDigit) res += ch;
  }

  return res;
}

console.log(reverseWithoutNumbers("hello123world456")); // "dlrowolleh"
console.log(reverseWithoutNumbers("abc123xyz"));        // "zyxabc"

module.exports = reverseWithoutNumbers;