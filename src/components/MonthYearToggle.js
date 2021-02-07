import React from 'react'

export default function MonthYearToggle({isMonths, setIsMonths}){
    const monthClass = isMonths ? 'toggle-button toggle-months toggle-active' : 'toggle-button toggle-months'
    const yearClass = !isMonths ? 'toggle-button toggle-years toggle-active' : 'toggle-button toggle-years'
console.log(isMonths)
    return(
        <div className='toggle-wrapper'>
            <button 
            className={monthClass}
            onClick={()=>setIsMonths()}
            >Months</button>
            <button 
            className={yearClass}
            onClick={()=>setIsMonths()}
            >Years</button>
        </div>
    )
}