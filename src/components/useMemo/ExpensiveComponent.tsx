import  React from 'react';

const ExpensiveComponent = React.memo(() => {
  console.log('ExpensiveComponent rendered');
  
  
    const sum = () =>{
        console.log('Calculating sum...');
        let total = 0;
        for (let i = 0; i < 1000000000; i++) {
            total += i;
        }
        return total;
    }

    const total = sum();
  
  return (
    <div>
       <p>Sum : {total}</p>
    </div>
  );
});
export default ExpensiveComponent;