// Задача: Написати функцію, яка приймає рядок і замінює всі голосні (a, e, i, o, u, y) 
// на певний символ, наприклад *.

function replaceVowels(str) {
  const vowels = ['a','e','i','o','u','y','A','E','I','O','U','Y'];
  let result = '';

  for (let i = 0; i < str.length; i++) {
    const ch = str[i];
    result += vowels.includes(ch) ? '*' : ch;
  }

  return result;
}

console.log(replaceVowels("hello world"));   // "h*ll* w*rld"
console.log(replaceVowels("Javascript"));    // "J*v*scr*pt"

module.exports = replaceVowels;