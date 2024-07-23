import React, { useState } from 'react'
import styled from 'styled-components'

const CounterFunctional = () => {
    const [count, setCount] = useState(0);
  
    const incrementCounter = () => {
      setCount(count + 1);
    };
  
    const decrementCounter = () => {
      setCount(count - 1);
    };
  
    return (
      <CounterStyle>
      <div className='counter-div'>
      <h1>Counter App</h1>
        <p>{count}</p>
        <button onClick={incrementCounter}>Increment</button>
        <button onClick={decrementCounter}>Decrement</button>
      </div>
      </CounterStyle>
    );
  };

function Counter() {
  return (
    <>
    <CounterFunctional />
    </>
  )
}

export default Counter

const CounterStyle = styled.div `

.counter-div {
margin-left: 500px;
text-align: column;
font-size: 30px;

}

button {
  color: black;
  padding: 20px;
  border: 1px solid black;
}

`