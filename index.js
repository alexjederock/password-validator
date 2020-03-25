function checkUpper(valid, counter) {

  for (let i = 0; i < valid.length; i++) {
    if (valid[i] !== valid[i].toUpperCase()) {
      counter++
    }

  }
  return counter
}

function checkLower(valid, counter) {

  for (let i = 0; i < valid.length; i++) {
    if (valid[i] !== valid[i].toLowerCase()) {
      counter++
    }

  }
  return counter
}

function checkNumber(valid, counter) {
  for (let i = 0; i < valid.length; i++) {
    if (!isNaN(valid[i])) {
      counter++
    }
  }
  return counter
}


function checkSpecial(valid, counter) {
  let special = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')']

  for (let i = 0; i < valid.length; i++) {

    if (special.includes(valid[i])) {
      counter++

    }

  }
  return counter

}



function validatePassword(valid) {
  if (valid.length <= 8) {
    return false
  }

  let special = checkSpecial(valid, 0)
  let upper = checkUpper(valid, 0)
  let lower = checkLower(valid, 0)
  let number = checkNumber(valid, 0)


  return upper > 0 && lower > 0 && special > 0 && number > 0


}


module.exports = validatePassword