import React from 'react';


const MyComponent = () => {

    const [count, setCount] = React.useState(0);

    React.useEffect(() => {
        console.log("useEffect called");
        console.log("useEffect 1st call " + count);
        setCount(count + 1);
        console.log("useEffect 2nd call " + count);
        setCount(count + 1);
        console.log("useEffect 3rd call " + count);

    }, []);

    return (
        <div>count: {count}</div>
    )
}

export default MyComponent;