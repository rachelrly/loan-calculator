import React, { useContext } from 'react'
import { LoanContext } from '../contexts/LoanContext'

function LoanAmountInput() {
  const { dispatch, loanAmt } = useContext(LoanContext)

  return (
    <fieldset>
      <label className='loan-amount-label'>Loan amount</label>
        <input type='text' 
        placeholder='400000' 
        className='loan-amount-input' 
        value={loanAmt} 
        onChange={e => dispatch({
          type: 'setLoanAmt',
          payload: {value: e.target.value}
        })} />
    </fieldset>
  )
}

export default LoanAmountInput
