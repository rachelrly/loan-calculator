
//have amount validation
//have month validation that conversts to months
//call private function that validates against regex
export function validateLoanAmount(value) {
  if (!_isNumericValue(value)) return false

  //return function

}

export function validateLoanTerm(value, state = 'month') {
  if (!_isNumericValue(value)) return false

}

export function validateInterestRate(value) {
  if (!_isNumericValue(value)) return false

}

function _isNumericValue(value) {
  /*returns boolean if number includes
  digits and decimals only */
  const regex = /^\d+(\.\d{1,2})?$/
  return regex.text(value)
}