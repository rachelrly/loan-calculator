import { useContext } from 'react'
import { LoanContext } from '../contexts/LoanContext'


export function useCalculatePayments() {
  /*Used formula: r(PV) / 1 - (1+r)^ -n*/
  const { loanAmt, loanTerm, interestRate } = useContext(LoanContext)
  console.log({ loanAmt }, { loanTerm }, { interestRate })

  if (!loanAmt || !loanTerm.value || !interestRate) return 0

  const n = loanTerm.type === 'year' ? loanTerm.value * 12 : loanTerm.value
  const r = interestRate / 12

  const numerator = r * loanAmt
  const denominator = 1 - Math.pow(1 + r, (n * -1))
  const payment = numerator / denominator

  //MAKE BETTER ACCURACY IF TIME
  return parseFloat(payment).toFixed(2)
}

