function greet(name) {
  // function to return a greeting with the passed name and the current date without time
  return `Hello ${name}, today is ${new Date().toLocaleDateString()}`;
}

function mockMeFn(num) {
  return num;
}

// export functions
module.exports = {
  greet,
  mockMeFn,
};
