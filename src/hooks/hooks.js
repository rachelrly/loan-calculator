import { useContext } from 'react'
import { LoanContext } from '../contexts/LoanContext'


export function useCalculatePayments() {
  /*Used formula: r(PV) / 1 - (1+r)^ -n*/
  const { loanAmt, loanTerm, interestRate } = useContext(LoanContext)
  console.log({ loanAmt }, { loanTerm }, { interestRate })

  if (!loanAmt || !loanTerm.value || !interestRate) return 0

  const n = loanTerm.type === 'year' ? loanTerm.value * 12 : loanTerm.value
  const r = (interestRate * 0.01) / 12

  const numerator = r * loanAmt
  const denominator = 1 - Math.pow(1 + r, (n * -1))
  const payment = numerator / denominator

  //MAKE BETTER ACCURACY IF TIME
  return parseFloat(payment).toFixed(2)
}

export function useLargeNumberWithCommas(num){
  if(!Number(num)) return 0

  const numStr = `${num}`
  let formattedStr = ''
  for(let i=0; i<numStr.length; i++){
    if((i+1) % 3 === 0){
      formattedStr += ','
    }
    formattedStr += numStr[i]
  }
  return formattedStr
}
