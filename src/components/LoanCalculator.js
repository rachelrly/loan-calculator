import React from 'react'
import Calculator from './Calculator'
import PaymentInfo from './PaymentInfo'
import '../css/LoanCalculator.css'

function LoanCalculator() {
  return (
    <section className='loan-calculator-wrapper'>
      <Calculator />
      <PaymentInfo />
    </section>
  )
}

export default LoanCalculator
