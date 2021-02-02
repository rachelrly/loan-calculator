import React, { useContext, useEffect, useState } from 'react'
import { LoanContext } from '../contexts/LoanContext'
import LoanAmount from './LoanAmount'
import InterestRate from './InterestRate'

function Calculator() {
  const { dispatch, loanAmt } = useContext(LoanContext);
  //have controlled state and pass state to dispatch!!!!!
  //run dispatch in useEffect that 
  useEffect(() => { }, [loanAmt])

  return (
    <form className='calculator-wrapper'>
      <LoanAmount />
      <fieldset>
        <label>Loan term</label>
        <input type='text' onChange={e => { }} />
      </fieldset>
      <InterestRate />
    </form>
  )
}

export default Calculator
