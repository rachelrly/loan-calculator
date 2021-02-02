import React, { useContext, useEffect, useState } from 'react'
import { LoanContext } from '../contexts/LoanContext'
import LoanAmount from './LoanAmount'
import InterestRate from './InterestRate'
import LoanTerm from './LoanTerm'


function Calculator() {
  const { loanAmt } = useContext(LoanContext);

  useEffect(() => { }, [loanAmt])

  return (
    <form className='calculator-wrapper'>
      <LoanAmount />
      <LoanTerm />
      <InterestRate />
    </form>
  )
}

export default Calculator
