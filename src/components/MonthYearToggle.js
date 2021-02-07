import React, {useContext, useEffect} from 'react'
import {LoanContext} from '../contexts/LoanContext'

export default function MonthYearToggle(){
    const {isMonth, dispatch} = useContext(LoanContext)
    const monthClass = isMonth ? 'toggle-button toggle-months toggle-active' : 'toggle-button toggle-months'
    const yearClass = !isMonth ? 'toggle-button toggle-years toggle-active' : 'toggle-button toggle-years'

    useEffect(()=>{},[isMonth])

    return(
        <div className='toggle-wrapper'>
            <button 
            className={monthClass}
            onClick={()=> dispatch({
                type: 'setLoanTermType',
                payload: {value: true}
            })}
            >Months</button>
            <button 
            className={yearClass}
            onClick={()=> dispatch({
                type: 'setLoanTermType',
                payload: {value: false}
            })}
            >Years</button>
        </div>
    )
}