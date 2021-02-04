import React, { useEffect, useContext } from 'react'
import { LoanContext } from '../contexts/LoanContext'
import { useCalculatePayments, useLargeNumberWithCommas } from '../hooks/hooks'
import '../css/PaymentInfo.css'


function PaymentInfo() {
  const { loanAmt, loanTerm, interestRate } = useContext(LoanContext)
  //re-render result page when data changes
  useEffect(() => { }, [loanAmt, loanTerm, interestRate])

  const monthlyPayment = useCalculatePayments()
  return (
    <div className='payment-info-wrapper'>
      <h2 className='monthly-payment'>
        <span className='monthly-payment-label'>Monthly payment: </span>
        <div className='monthly-payment-value'>
          <span >${useLargeNumberWithCommas(monthlyPayment)}</span>
        </div>
      </h2>
      <span className='total-principal'>
        <span className='total-principal-label'>Total Principal Paid: </span>
        <div className='total-principal-value'>
          <span >${useLargeNumberWithCommas(loanAmt)}</span>
        </div>
      </span>

    </div>
  )
}

export default PaymentInfo
