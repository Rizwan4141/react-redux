import React from 'react';
import { useState } from 'react';

const Counter1 = () => {
  const [data,setData]=useState(0)

    return (
    <div className="App">
      <button onClick={()=>{setData(data+1)}}>+</button>
      <span>Counter:{data}</span>
      <button  onClick={()=>{setData(data+1)}}>-</button>
    </div> 
       
    );
};

export default Counter1;