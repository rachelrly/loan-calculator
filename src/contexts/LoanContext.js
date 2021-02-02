import React, { createContext, useReducer } from 'react'

/*Instance of context */
export const LoanContext = createContext()

/*This component wraps index.js */
function LoanContextProvider({ children }) {

  const reducer = (state, action) => {
    const { val } = action.payload
    switch (action.type) {
      case 'changeAmt': return
      case 'changeTerm': return
      case 'changeInterest': return
      case 'reset': return { loanAmt: 0, loanTerm: 0, interestRate: 0 }
    }
  }



  const [state, dispatch] = useReducer(
    reducer, { loanAmt: 0, loanTerm: 0, interestRate: 0 }
  )

  const { loanAmt, loanTerm, interestRate } = state
  const value = { loanAmt, loanTerm, interestRate, dispatch }

  return (
    <LoanContext.Provider value={value}>
      {children}
    </LoanContext.Provider>

  )
}

export default LoanContextProvider
