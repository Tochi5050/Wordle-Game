import React, {useState, useEffect} from 'react'
import {data} from './data'
import Table from './Table'
import './App.css'

const Wordle = () => {
let solutionLen = data.length
let guess_length = 6
let words_length = 5

const [words, setWords] = useState([null, null, null, null, null, null])
const [guesses, setGuesses] = useState('')
const [solution, setSolution] = useState('')



useEffect(() => {
    
    const fetch_guesses = () => {
        let idx = Math.floor(Math.random() * solutionLen)
        setSolution(data[idx].toLowerCase())
        
    }

    fetch_guesses()
    

    
}, [])  

let currentWordIdx = words.findIndex(word => word == null)

useEffect(() => {
if (solution == null) return



const perform_action = (event) => {
  

  const isLetter = event.key.length == 1 && event.key >= 'a' && event.key <= 'z'
  
  

 
  
  setGuesses(prevGuess => {
    if(prevGuess.length == words_length && event.key == 'Enter'){
        let currentWordIdx = words.findIndex(word => word == null)
        const neWords = [...words]
        neWords[currentWordIdx] = prevGuess
        setWords(neWords)
        console.log(words)
        return ''
    }else if(prevGuess.length < words_length && isLetter){
      return prevGuess + event.key
    }else if(event.key == 'Backspace'){
       return prevGuess.slice(0, -1)
    }else{
      return prevGuess
    }
  })
    

}



   window.addEventListener('keydown', perform_action)

   return () => window.removeEventListener('keydown', perform_action)
   
}, [words, solution])





  return (
    <div>
        {words.map((columns, index) => {
            console.log(guesses, 'guesses')
            return <div className='board' key={index}>
                
            <Table 
              rows={(index == currentWordIdx ? guesses : columns ?? '' ).padEnd(words_length)}
              guesses={guesses}
              col={columns}
              index={index}
              solution={solution}
              isFinal={currentWordIdx > index || currentWordIdx === -1}
            />
            </div>
})}
    </div>
  )
}

export default Wordle