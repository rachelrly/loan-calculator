import React from 'react'
import LoanAmountInput from './LoanAmountInput'
import InterestRateInput from './InterestRateInput'
import LoanTermInput from './LoanTermInput'
import PaymentInfo from './PaymentInfo'
import '../css/LoanCalculator.css'



function LoanCalculator() {
  return (
    <section className='loan-calculator-wrapper'>
      <form className='calculator-wrapper'>
        <LoanAmountInput />
        <LoanTermInput />
        <InterestRateInput />
      </form>
      <PaymentInfo />
    </section>
  )
}

export default LoanCalculator
