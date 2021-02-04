import { useContext, useEffect } from 'react'
import { LoanContext } from '../contexts/LoanContext'


export function useCalculatePayments() {
  /*Used formula: r(PV) / 1 - (1+r)^ -n*/
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
  useEffect(()=>{
    console.log('USE EFFECT RAN')

    
  },[num])

  if(!Number(num)) return 0 //if number is invalid display 0

  const numStr = `${num}`

  if(numStr.length <=3) return num

  let formattedStr = ''
  for(let i=0; i<numStr.length; i++){
    const backIdx = numStr.length - 1 - i
    console.log(i, backIdx)
    if((backIdx+1) % 3 === 0 && i>0){
      formattedStr += ','
    }
    formattedStr += numStr[i] 
  }
  return formattedStr
}
