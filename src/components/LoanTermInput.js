import React, { useContext, useEffect, useState } from 'react'
import { LoanContext } from '../contexts/LoanContext'
import MonthYearToggle from './MonthYearToggle'

function LoanTermInput() {
  const [isMonths, setIsMonths] = useState(true)
  const { handleLoanTerm, loanTerm } = useContext(LoanContext)

  useEffect(() => { }, [loanTerm])

  return (
    <div className='loan-term-wrapper'>
    <fieldset>
      <label className='loan-amount-label'>Loan term</label>
      <input type='text' 
        className='loan-amount-input'
        placeholder='8 years'
        value={loanTerm.value}
        onChange={e => handleLoanTerm(e.target.value)} />
    </fieldset>
    <MonthYearToggle isMonths={isMonths} setIsMonths={()=>setIsMonths(!isMonths)} />
    </div>
  )
}

export default LoanTermInput
