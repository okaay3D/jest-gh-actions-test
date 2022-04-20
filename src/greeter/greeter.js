function greet(name) {
  // function to return a greeting with the passed name and the current date without time in german format
  return `Hello ${name}, today is ${new Date().toLocaleDateString('de-DE')}`;
}

function mockMeFn(num) {
  return num;
}

// export functions
module.exports = {
  greet,
  mockMeFn,
};
