import React, { createContext, useState } from 'react'

/*Instance of context */
export const LoanContext = createContext()

/*This component wraps index.js */
function LoanContextProvider({ children }) {
  const [loanAmt, setLoanAmt] = useState(0)
  const [loanTerm, setLoanTerm] = useState({ value: 0, type: 'month' })
  const [interestRate, setInterestRate] = useState(0)

  const isNumericValue = (value) => {
    /*returns boolean if number includes
    digits and decimals only */
    const regex = /^\d+(\.\d{1,2})?$/
    return regex.test(value)
  }

  const handleLoanAmt = val => {
    if (!isNumericValue(Number(val))) return null
    setLoanAmt(val)
  }

  const handleInterestRate = val => {
    if (!isNumericValue(Number(val))) return null
    else if (val > 100) return null //percent cannot be greater than 100
    setInterestRate(val)
  }

  const handleLoanTerm = (value, type = 'year') => {
    if (!isNumericValue(Number(value))) return null
    setLoanTerm({ value, type })
  }

  const value = { loanAmt, loanTerm: loanTerm, interestRate, handleLoanAmt, handleInterestRate, handleLoanTerm }
  console.log(value)
  return (
    <LoanContext.Provider value={value}>
      {children}
    </LoanContext.Provider>

  )
}

export default LoanContextProvider
