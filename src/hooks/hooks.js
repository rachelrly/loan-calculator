import { useContext, useEffect } from 'react'
import { LoanContext } from '../contexts/LoanContext'


export function useCalculatePayments() {
  /*This hook calculates the monthly payment from context
  Used formula: r(PV) / 1 - (1+r)^ -n*/
  const { loanAmt, loanTerm, interestRate } = useContext(LoanContext)

  if (!loanAmt || !loanTerm.value || !interestRate) return 0

  const n = loanTerm.type === 'year' ? loanTerm.value * 12 : loanTerm.value
  const r = (interestRate * 0.01) / 12

  const numerator = r * loanAmt
  const denominator = 1 - Math.pow(1 + r, (n * -1))
  const payment = numerator / denominator

  return parseFloat(payment).toFixed(2)
}



export function useLargeNumberWithCommas(num){
/*This hook formats large numbers with commas */
  if(!Number(num)) return 0 //if number is invalid display 0

  let numStr = `${num}`

  /*if decimal in number, split off last 3 chars*/
  let regex = /\./g
  let decimal = null
  if(numStr.match(regex)){
    decimal = numStr.slice(numStr.length-3)
    numStr = numStr.slice(0, numStr.length-3)
  } 

  let formattedStr = ''

  if(numStr.length <=3) return num

  for(let i=0; i<numStr.length; i++){
    const backIdx = numStr.length - 1 - i //negative index
    
    if((backIdx+1) % 3 === 0 && i>0){
      formattedStr += ','
    }
    formattedStr += numStr[i] 
  }

  if (decimal) formattedStr += decimal
  return formattedStr
}


export function useCalculateTotalInterest() {
  const { loanAmt, loanTerm, interestRate } = useContext(LoanContext)

  const term = loanTerm.type === 'year' ? loanTerm.value : loanTerm.value / 12

  const yearlyRate = interestRate * 0.01 

  const yearlyInterest = yearlyRate * loanAmt

  const totalInterest = yearlyInterest * term

  return parseFloat(totalInterest).toFixed(2)
}
