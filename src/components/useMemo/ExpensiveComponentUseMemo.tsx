import React, { useState, useMemo } from 'react';

function ExpensiveComponentUseMemo() {
  const [count, setCount] = useState(0);
  const [input, setInput] = useState('');

  // Expensive computation - simulating with loop
  const expensiveCalculation  = (num:any) => {
    console.log('Calculating...');
    let total = 0;
    for (let i = 0; i < 100000000; i++) {
      total += num;
    }
    return total;
  };

  // Memoizing the expensive computation
  const calculatedValue = useMemo(() => expensiveCalculation (count), [count]);

  return (
    <div>
      <h2>useMemo Example</h2>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>

      <p>Calculated: {calculatedValue}</p>

      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Type here"
      />
    </div>
  );
}

export default ExpensiveComponentUseMemo;
