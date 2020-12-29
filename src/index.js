import React, { useState, useEffect, useReducer } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { FaStar } from 'react-icons/fa';

const starRatingArray = length => [...Array(length)];

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


function App() {
  return (<>
    <StarRating />
    {/* <ExampleFetch /> */}
    <CheckBoxSample />
    <Message />
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
