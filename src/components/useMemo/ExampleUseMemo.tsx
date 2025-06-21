
import React,{useMemo} from "react";

const ExampleUseMemo = () => {


    const [count, setCount] = React.useState(0);
 

    const reRender = () => {
        console.log("This component will rerender when count changes");
        return <div>
            <h2 style={{color:"red"}}>It will rerender again :{ count}</h2>
        </div>
    }

    const noRender = useMemo(()=>{
        console.log("This component will not rerender when count changes");
        return <div>
            <h2 style={{color:"blue"}}>It will not rerender again :{ count}</h2>
        </div>
    },[count]);

    return (
        <div>
            <h2>useMemo Example</h2>
            <hr></hr>
            <br></br>
            {reRender()}
            <hr></hr>
            {noRender}
            <p>Count: {count}</p>
            
            <button onClick={() => setCount(count + 1)}>Increment</button>&nbsp;&nbsp;
             
            <p></p>
            <p>This component demonstrates the use of userMemo hook.</p>
        </div>
    )
}

export default ExampleUseMemo;