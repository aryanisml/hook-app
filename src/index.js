import React, { useState, useEffect } from 'react';
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
  },[])

  if (userData) {
    return <ul>{
      userData.map((n, i) => (
        <li>{n.login}</li>
      ))
    }</ul>
  }
}

function App() {
  return (<>
    <StarRating />
    <ExampleFetch />
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
