import React from 'react';
// import { useState } from 'react';
import { useSelector } from 'react-redux';

const Counter = () => {
  const data=useSelector((state)=>state.counter.data)
  // const [data,setData]=useState(0)

    return (
    <div className="App">
      <button onClick={()=>{}}>+</button>
      <span>Counter:{data}</span>
      <button  onClick={()=>{}}>-</button>
    </div> 
       
    );
};

export default Counter;