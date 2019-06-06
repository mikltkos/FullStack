
import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Statistics = (props) => { 
    return (
      <>
        <td>{props.text}</td><td>{props.value}</td>
      </>
    )       
}

const Button = ({handleClick, text}) => {
  return (
    <button onClick={handleClick}>
      {text}
    </button>
  )
}

const Display = ({good, neutral, bad}) => {
  if(good === 0 && neutral === 0 && bad === 0){
    return (
      <div>
        no feedback given
      </div>
    )
  }
  return (
    <div>
      <table>
        <tbody>
          <tr><Statistics text='good' value={good} /></tr>
          <tr><Statistics text='neutral' value={neutral} /></tr>
          <tr><Statistics text='bad' value={bad} /></tr>
          <tr><Statistics text='all' value={good+neutral+bad} /></tr>
          <tr><Statistics text='average' value={(good - bad)/(good+neutral+bad)} /></tr>
          <tr><Statistics text='positives' value={(good/(good+neutral+bad)) * 100 + '%'} /></tr>
          </tbody>
      </table>
    </div>
  )
}

const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGoodClick = () => {
      setGood(good + 1)   
  }

  const handleNeutralClick = () => {
      setNeutral(neutral + 1)
  }
  
  const handleBadClick = () => {
      setBad(bad + 1)
  }


  return (
    <div>
      <h1>Give feedback</h1>
      <Button handleClick={handleGoodClick} text='good' />
      <Button handleClick={handleNeutralClick} text='neutral' />
      <Button handleClick={handleBadClick} text='bad' />
      <h1>Statistics</h1>
      <Display good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)
 
 
