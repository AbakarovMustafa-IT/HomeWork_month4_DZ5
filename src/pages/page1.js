import React from 'react';
import { useState } from 'react';


export default function Counter() {
  const [age, setAge] = useState(0);

  function increment() {
    setAge(a => a + 1)
  }

  return (
    <>
      <h1>Your Age: {age}</h1>
      <button onClick={() => {
        increment()
        increment()
        increment()
        increment()
        increment()
      }}>+5</button>
      <button onClick={() => {
        increment()
      }}>+1</button>
    </>
  )
}