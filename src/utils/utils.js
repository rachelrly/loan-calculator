
//have amount validation
//have month validation that conversts to months
//call private function that validates against regex
export function validateLoanAmount(value) {
  if (!isNumericValue(value)) return false

  //return function

}

export function validateLoanTerm(value, state = 'month') {
  if (!isNumericValue(value)) return false

}

export function validateInterestRate(value) {
  if (!isNumericValue(value)) return false

}

export function isNumericValue(value) {
  /*returns boolean if number includes
  digits and decimals only */
  const regex = /^\d+(\.\d{1,2})?$/
  return regex.test(value)
}