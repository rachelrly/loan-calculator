import React, { useContext, useEffect } from 'react'
import { LoanContext } from '../contexts/LoanContext'
import { isNumericValue } from '../utils/utils'

function LoanAmount() {
  const { handleLoanAmt, loanAmount } = useContext(LoanContext)



  useEffect(() => { }, [loanAmount])

  return (
    <fieldset>
      <label className='loan-amount-label'>Loan amount</label>
      <span className='dollar-sign-input'>
        <span className='dollar-sign'>$</span>
        <input type='text' className='loan-amount-input' value={loanAmount} onChange={e => handleLoanAmt(e.target.value)} />
      </span>
    </fieldset>
  )
}

export default LoanAmount
