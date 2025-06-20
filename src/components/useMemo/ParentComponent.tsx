
import React from 'react';


const ParentComponent = () => {

    const [count, setCount] = React.useState(0);


  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Re-render Parent</button>


        <p>Parent re-renders : {count}</p>   
    </div>
  );
};