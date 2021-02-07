import React, { useContext, useEffect } from 'react'
import { LoanContext } from '../contexts/LoanContext'

function LoanAmountInput() {
  const { handleLoanAmt, loanAmt } = useContext(LoanContext)

  useEffect(() => { }, [loanAmt])

  return (
    <fieldset>
      <label className='loan-amount-label'>Loan amount</label>
     
        <input type='text' placeholder='400000' className='loan-amount-input' value={loanAmt} onChange={e => handleLoanAmt(e.target.value)} />
    </fieldset>
  )
}

export default LoanAmountInput
