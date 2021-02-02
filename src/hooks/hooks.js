import { useContext } from 'react'
import { LoanContext } from '../contexts/LoanContext'


export function useCalculatePayments() {
  /*Used formula: r(PV) / 1 - (1+r)^ -n*/
  const { loanAmt, loanTerm, interestRate } = useContext(LoanContext)
  const n = loanTerm
  const r = interestRate / n

  const numerator = r * loanAmt
  const denominator = 1 - Math.pow(1 + r, (n * -1))
  const payment = numerator / denominator

  //MAKE BETTER ACCURACY IF TIME
  return parseFloat(payment).toFixed(2)

}

