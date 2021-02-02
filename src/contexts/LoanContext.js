import React, { createContext, useReducer } from 'react'

/*Instance of context */
export const LoanContext = createContext()

/*This component wraps index.js */
function LoanContextProvider({ children }) {
  /*I used a reducer here because the state is deeply tied together */
  const reducer = (state, action) => {
    const { val } = action.payload
    switch (action.type) {
      case 'changeAmt': return { ...state, loanAmt: value }
      case 'changeTerm': return { ...state, loanTerm: value }
      case 'changeInterest': return { ...state, interestRate: value }
      case 'reset': return { loanAmt: 0, loanTerm: 0, interestRate: 0 }
    }
  }



  const [state, dispatch] = useReducer(
    reducer, { loanAmt: 12000, loanTerm: 12, interestRate: 6.5 }
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
