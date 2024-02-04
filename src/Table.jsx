import React from 'react'
import './App.css'

const Table = ({rows, guesses, col, index, solution, isFinal}) => {
    

  return (
    <div className='line'>
    
               
    {
          
        rows.split('').map((row, index) => {
          let className = 'tile'
          console.log(solution[index], 'soln')
          console.log(row, 'col[index]')
          if (isFinal){
            if(row === solution[index]){
              className += ' correct'
            }else if ( solution.includes(row)){
              
              className += ' close'
            }else{
              className += ' incorrect'
            }
          }
               
                 return <div className={className} key={index}>
                    {row}
                </div>
})
    }
        
    </div>
  )
}

export default Table