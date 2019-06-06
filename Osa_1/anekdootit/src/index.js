
import React, { useState } from 'react'
import ReactDOM from 'react-dom'


const Button = ({handleClick, text}) => (
    <button onClick={handleClick}>
        {text}
    </button>
)

const getRandomNumber = () => {
  const rNumber = Math.floor((Math.random() * 6))
  console.log('random number: ', rNumber)
  return rNumber
}

const Votes = ({selected, votes}) => {
  return(
    <p>has {votes[selected]} votes</p>
  )
}

const MostVoted = ({votesArray, anecdotes}) => {
  let max = votesArray[0];
  let index = 0;
  for(let i = 0; i < votesArray.length; i++){
    if(votesArray[i] > max){
      max = votesArray[i]
      index = i
      console.log('new max: ', max, 'index: ', index)
    }
  }
  if(max > 0){
    return(
      <div>
        {anecdotes[index]}
        <Votes selected={index} votes={votesArray} />
      </div>
    )
  }
  return(
    <div><p>no votes</p></div>
  )
}

const App = (props) => {
  const [selected, setSelected] = useState(getRandomNumber)
  const votesArray = new Array(anecdotes.length).fill(0)
  const [votes, setVotes] = useState(votesArray)

  const getNumber = () => {
    const newSelected = getRandomNumber()
    setSelected(newSelected)
  }

  const vote = () => {
    const copy = [ ...votes]
    copy[selected] += 1
    setVotes(copy)
    console.log('selected: ', selected)
    console.log('votes: ', copy)
  }

  return (
    <>  
      <div>
        <h2>Anecdote of the day</h2>
        {props.anecdotes[selected]}
        <Votes selected={selected} votes={votes}/>
      </div>
      <div>
        <Button handleClick={vote} text='vote' />
        <Button handleClick={getNumber} text='next anecdote' />
      </div>
      <div>
        <h2>Anecdote with most votes</h2>
        <MostVoted votesArray={votes} anecdotes={anecdotes}/>
      </div>
    </>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)
 
