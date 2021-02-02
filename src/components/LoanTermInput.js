import React, { useContext, useEffect } from 'react'
import { LoanContext } from '../contexts/LoanContext'


function LoanTermInput() {
  const { handleLoanTerm, loanTerm } = useContext(LoanContext)

  useEffect(() => { }, [loanTerm])

  return (
    <fieldset>
      <label className='loan-amount-label'>Loan term</label>
      <input type='text' className='loan-amount-input'
        value={loanTerm}
        onChange={e => handleLoanTerm(e.target.value)} />
    </fieldset>
  )
}

export default LoanTermInput
