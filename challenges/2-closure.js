function generateMultiples(multiple) {
  function inner(lengthOfResult) {
    const multResult = [];
    for (let i = 1; i <= lengthOfResult; i++) {
      multResult.push(i * multiple);
    }
    return multResult;
  }
  return inner;
}

function secureFunc(password, func) {
  function passAttempt(attempt, ...restOfTheArgs) {
    if (attempt === password) {
      return func(...restOfTheArgs); // spread
    } else {
      return "Sorry your password is incorrect!";
    }
  }
  return passAttempt;
}

function rememberMe() {}

module.exports = { generateMultiples, secureFunc, rememberMe };
