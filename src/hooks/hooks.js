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
  /*Used formula: r(PV) / 1 - (1+r)^ -n*/
  const { loanAmt, loanTerm, interestRate } = useContext(LoanContext)
  const n = loanTerm
  const r = interestRate / n

  const numerator = r * loanAmt
  const denominator = 1 - Math.pow(1 + r, (n * -1))
  const payment = numerator / denominator

  //I know this could cause rounding issues with money
  //FIX IF TIME!!!!!
  return parseFloat(payment).toFixed(2)

}

function isNumericValue(value) {
  /*returns boolean if number includes
  digits and decimals only */
  const regex = /^\d+(\.\d{1,2})?$/
  return regex.text(value)
}