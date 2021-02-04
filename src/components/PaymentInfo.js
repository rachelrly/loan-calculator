import React, { useEffect, useContext } from 'react'
import { LoanContext } from '../contexts/LoanContext'
import { useCalculatePayments } from '../hooks/hooks'
import '../css/PaymentInfo.css'


function PaymentInfo() {
  const { loanAmt, loanTerm, interestRate } = useContext(LoanContext)
  //re-render result page when data changes
  useEffect(() => { }, [loanAmt, loanTerm, interestRate])
  return (
    <div className='payment-info-wrapper'>
      <h2 className='monthly-payment'>
        <span className='monthly-payment-label'>Monthly payment: </span>
        <div className='monthly-payment-value'>
          <span >${useCalculatePayments()}</span>
        </div>
      </h2>

    </div>
  )
}

export default PaymentInfo
