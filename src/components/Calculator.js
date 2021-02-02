import React, { useContext } from 'react'
import { LoanContext } from '../contexts/LoanContext'

function Calculator() {

  return (
    <form className='calculator-wrapper'>
      <fieldset>
        <label>Loan amount</label>
        <input type='text' onChange={e => { }} />
      </fieldset>
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
