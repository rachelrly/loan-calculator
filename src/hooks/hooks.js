import { useState, useContext } from 'react'
import { LoanContext } from '../contexts/LoanContext'

//have amount validation
//have month validation that conversts to months
//call private function that validates against regex
export function useLoanAmount(value) {
  /*takes in onChange*/


  //if (!regex.test(value)) //set error invalid input

  //return function
}

export function useLoanTerm(value, state) {

}

export function useInterestRate(value) {

}

export function useCalculatePayments() {
  /*Used formula: r(PV) / 1 - (1+r)^ -n 
  n = 12 (number of periods)
  r = interestRate / n */
  const { loanAmt, loanTerm, interestRate } = useContext(LoanContext)
  const denominator = 1 -
  //put formula for loan calcuator here
//const payment = loanAmt / 
  //return total and render to payment info

}

function isNumericValue(value) {
  /*returns boolean if number includes
  digits and decimals only */
  const regex = /^\d+(\.\d{1,2})?$/
  return regex.text(value)
}