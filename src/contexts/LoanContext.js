import React, { createContext, useState } from 'react'
import { validateLoanAmount, validateInterestRate, validateLoanTerm } from '../utils/utils'



/*Instance of context */
export const LoanContext = createContext()

/*This component wraps index.js */
function LoanContextProvider({ children }) {
  const [loanAmt, setLoanAmt] = useState(0)
  const [loanTerm, setLoanTerm] = useState(0)
  const [interestRate, setInterestRate] = useState(0)

  const isNumericValue = (value) => {
    /*returns boolean if number includes
    digits and decimals only */
    const regex = /^\d+(\.\d{1,2})?$/
    return regex.test(Number(value))
  }

  const handleLoanAmt = val => {
    if (!isNumericValue(val)) return null
    setLoanAmt(val)
  }

  const handleInterestRate = val => {
    console.log(val)
    if (!isNumericValue(val)) return null
    else if (val > 100) return null //percent cannot be greater than 100
    setInterestRate(val)
  }

  const value = { loanAmt, loanTerm, interestRate, handleLoanAmt, handleInterestRate }

  return (
    <LoanContext.Provider value={value}>
      {children}
    </LoanContext.Provider>

  )
}

export default LoanContextProvider
