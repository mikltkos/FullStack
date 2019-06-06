
import React from 'react'
import ReactDOM from 'react-dom'

const App = () => {
  const course = {
    name: 'Half Stack -sovelluskehitys',
    parts: [
      {
        name: 'Reactin perusteet',
        exercises: 10
      },
      {
        name: 'Tiedonvälitys propseilla',
        exercises: 7
      },
      {
        name: 'Komponenttien tila',
        exercises: 14
      }
    ]
  }

  return (
    <div>
      <Header course={course}/>
      <Content osat={course}/>
      <Total total={course}/>
    </div>
  )
}

const Header = (props) => {

    return (       
        <h1>{props.course.name}</h1>
    )
}

const Content = (props) => {
    
    return (
        <div>
            <Part name={props.osat.parts[0].name} exercises={props.osat.parts[0].exercises} />
            <Part name={props.osat.parts[1].name} exercises={props.osat.parts[1].exercises} />
            <Part name={props.osat.parts[2].name} exercises={props.osat.parts[2].exercises} />
        </div>
    )
}

const Part = (props) => {
    return (
      <p>{props.name} {props.exercises}</p>
    )
}

const Total = (props) => {
    return (
        <p>{props.total.parts[0].exercises + props.total.parts[1].exercises + props.total.parts[2].exercises}</p>
        )
}

ReactDOM.render(<App />, document.getElementById('root')) 
