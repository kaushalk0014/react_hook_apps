
import React from "react";
import ExpensiveComponent from "./ExpensiveComponent";

const MemoParentComponent = () => {
    const [count, setCount] = React.useState(0);

    return (
        <div>
            <ExpensiveComponent />
            <button onClick={() => setCount(count + 1)}>Re-render Parent</button>
            <p>Parent re-renders : {count}</p>
        </div>
    );
};


export default MemoParentComponent;