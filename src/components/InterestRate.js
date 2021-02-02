import React, { useContext, useEffect } from 'react'
import { LoanContext } from '../contexts/LoanContext'
import { isNumericValue } from '../utils/utils'


function InterestRate() {
  const { handleInterestRate, interestRate } = useContext(LoanContext)

  useEffect(() => { }, [interestRate])

  return (
    <fieldset>
      <label className='interest-rate-label'>Loan amount</label>
      <span className='percent-sign-input'>
        <span className='percent-sign'>%</span>
        <input type='text' className='interest-rate-input' value={interestRate} onChange={e => handleInterestRate(e.target.value)} />
      </span>
    </fieldset>
  )
}

export default InterestRate
