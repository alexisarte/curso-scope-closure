function greeting() {
  let userName = 'John';

  function displayUserName() {
    return `Hi, ${userName}!`;
  }
  return displayUserName;
}

const g = greeting();
console.log(g);
console.log(g());