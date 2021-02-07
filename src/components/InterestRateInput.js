import React, { useContext } from 'react'
import { LoanContext } from '../contexts/LoanContext'


function InterestRateInput() {
  const { dispatch, interestRate } = useContext(LoanContext)

  return (
    <fieldset>
      <label className='interest-rate-label'>Interest rate</label>
        <input 
        placeholder='4.2'
        type='text' 
        className='interest-rate-input' 
        value={interestRate} 
        onChange={e => dispatch({
          type: 'setInterestRate',
          payload: {value: e.target.value}
        })} />
    </fieldset>
  )
}

export default InterestRateInput
