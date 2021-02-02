import React, { useContext, useEffect } from 'react'
import { LoanContext } from '../contexts/LoanContext'
import { isNumericValue } from '../utils/utils'

function LoanAmount() {
  const { dispatch, loanAmount } = useContext(LoanContext)

  const handleDispatch = e => {
    //check if number
    console.log(e.target.value)
    if (!isNumericValue(e.target.value)) return null
    console.log('got past regex')
    dispatch({
      type: 'changeAmt',
      payload: { val: e.target.value }
    })
  }

  useEffect(() => { }, [loanAmount])

  return (
    <fieldset>
      <label>Loan amount</label>
      <input type='text' value={loanAmount} onChange={e => handleDispatch(e)} />
    </fieldset>
  )
}

export default LoanAmount
