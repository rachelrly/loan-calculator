import React, { useContext, useEffect, useState } from 'react'
import { LoanContext } from '../contexts/LoanContext'
import LoanAmount from './LoanAmount'


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
      <fieldset>
        <label>Interest rate per year</label>
        <input type='text' onChange={e => { }} />
      </fieldset>
    </form>
  )
}

export default Calculator
