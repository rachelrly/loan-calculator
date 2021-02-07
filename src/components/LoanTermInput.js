import React, { useContext } from 'react'
import { LoanContext } from '../contexts/LoanContext'
import MonthYearToggle from './MonthYearToggle'

function LoanTermInput() {
  const { dispatch, loanTerm } = useContext(LoanContext)

  return (
    <div className='loan-term-wrapper'>
    <fieldset>
      <label className='loan-amount-label'>Loan term</label>
      <input type='text' 
        className='loan-amount-input'
        value={loanTerm}
        onChange={e => dispatch({
          type: 'setLoanTermValue',
          payload: {value: e.target.value}
        })} />
    </fieldset>
    <MonthYearToggle />
    </div>
  )
}

export default LoanTermInput
