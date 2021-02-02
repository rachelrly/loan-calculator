import React, { useContext, useEffect } from 'react'
import { LoanContext } from '../contexts/LoanContext'

function LoanAmount() {
  const { handleLoanAmt, loanAmt } = useContext(LoanContext)

  useEffect(() => { }, [loanAmt])

  return (
    <fieldset>
      <label className='loan-amount-label'>Loan amount</label>
      <span className='dollar-sign-input'>
        <span className='dollar-sign'>$</span>
        <input type='text' className='loan-amount-input' value={loanAmt} onChange={e => handleLoanAmt(e.target.value)} />
      </span>
    </fieldset>
  )
}

export default LoanAmount
