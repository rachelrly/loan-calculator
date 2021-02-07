import React, { useContext, useEffect } from 'react'
import { LoanContext } from '../contexts/LoanContext'
import MonthYearToggle from './MonthYearToggle'

function LoanTermInput() {
  const { dispatch, loanTerm } = useContext(LoanContext)

  useEffect(() => { }, [loanTerm])

  return (
    <div className='loan-term-wrapper'>
    <fieldset>
      <label className='loan-amount-label'>Loan term</label>
      <input type='text' 
        className='loan-amount-input'
        placeholder='8 years'
        value={loanTerm.value}
        onChange={e => dispatch({
          type: 'setLoanTermAmt',
          payload: {value: e.target.value}
        })} />
    </fieldset>
    <MonthYearToggle />
    </div>
  )
}

export default LoanTermInput
