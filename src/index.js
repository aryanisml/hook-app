import React, { useState, useEffect, useReducer, useRef } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import SampleContext from  './SampleContext';
import reportWebVitals from './reportWebVitals';
import { FaStar } from 'react-icons/fa';
import SampleForm from './useStateForm';
const starRatingArray = length => [...Array(length)];


const trees = [
  {name : 'Apple', id : '232'},
  {name : 'Apple1', id : '2322'},
  {name : 'Apple3', id : '2324'},
  {name : 'Apple4', id : '2325'},
]



function Star({ selected = false, onSelected }) {
  return <FaStar
    color={selected ? 'red' : 'gray'}
    onClick={onSelected} />
}

function StarRating() {
  const [starSelected, setStarSelected] = useState(0);
  return starRatingArray(5).map((n, i) => (
    <Star key={i}
      selected={starSelected > i}
      onSelected={() => setStarSelected(i + 1)}
    />
  ));
}

function ExampleFetch() {
  const [userData, setUserdata] = useState([]);
  useEffect(() => {
    fetch(`https://api.github.com/users`)
      .then(res => res.json())
      .then(setUserdata)
      .catch(err => console.log(err))
  }, [])

  if (userData) {
    return <ul>{
      userData.map((n, i) => (
        <li>{n.login}</li>
      ))
    }</ul>
  }
}

function CheckBoxSample() {
  const reducer = (checked) => !checked;
  const [checked, toggle] = useReducer(
    reducer,
    false
  )

  return (
    <>
      <input type="checkbox"
        value={checked}
        onChange={toggle} />
      {checked ? 'Checked' : 'Not Checked'}
    </>)
}

const initalState = {
  message: 'Hi'
}
const reducerFunc = (state, action) => {
  switch (action.type) {
    case 'Yell':
      return {
        message: 'Hey!'
      }
      break;
    case 'Hello':
      return {
        message: 'Hello World'
      }
    default:
      break;
  }

}

function Message() {
  const [state, dispatch] = useReducer(reducerFunc, initalState)
  return (<>
    <p>Message : {state.message}</p>
    <button onClick={() => dispatch({ type: 'Yell' })}>Yell</button>
    <button onClick={() => dispatch({ type: 'Hello' })}>Hello</button>
  </>)

}

function UseRefForm() {

  const sound = useRef();
  const color = useRef();

  const Sumbit = (e) => {
    e.preventDefault();
    const soundVal = sound.current.value;
    const colorVal = color.current.value;
    alert(`${soundVal} similar to ${colorVal}`);
    sound.current.value = "";
    color.current.value = "";
  }

  return (

    <>
      <form onSubmit={Sumbit}>
        <input type="text" placeholder="sounds...."
          ref={sound} />
        <input type="color"
          ref={color} />
        <button>Submit</button>
      </form>
    </>
  );



}


function App() {
  return (<>
    <StarRating />
    {/* <ExampleFetch /> */}
    <CheckBoxSample />
    <Message />
    {/* <UseRefForm /> */}
    <SampleContext.Provider value={{trees}}>
    <SampleForm />
    </SampleContext.Provider>
    
  </>)

}


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
