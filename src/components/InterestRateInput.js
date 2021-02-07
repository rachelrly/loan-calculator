import React, { useContext, useEffect } from 'react'
import { LoanContext } from '../contexts/LoanContext'


function InterestRateInput() {
  const { handleInterestRate, interestRate } = useContext(LoanContext)

  useEffect(() => { }, [interestRate])

  return (
    <fieldset>
      <label className='interest-rate-label'>Interest rate</label>
        <input 
        placeholder='4.2'
        type='text' className='interest-rate-input' value={interestRate} onChange={e => handleInterestRate(e.target.value)} />
    </fieldset>
  )
}

export default InterestRateInput
