function greeting() {
  let userName = 'John';
  console.log(userName);

  if (userName === 'John') {
    console.log(`Hi ${userName}`);
  }
}

greeting();
console.log(userName); // ReferenceError: userName is not defined