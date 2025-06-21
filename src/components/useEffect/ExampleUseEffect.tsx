import { count } from "console";
import React from "react";

const ExampleUseEffect = () => {


    const [count, setCount] = React.useState(0);
    const [data, setData] = React.useState(100);


    React.useEffect(() => {
        console.log("Component rendered or update count " + { count });
        //It is rerendered every time the component is rendered or updated
    });

    //It is rerendered only once when the component is mounted
    React.useEffect(() => {
        console.log("Component mounted");
        //It is rerendered only once when the component is mounted
    }, []);

    React.useEffect(() => {
        console.log("Component rendered or update count " + { count });
        //It is rerendered every time the component is rendered or updated
    }, [count]);

    React.useEffect(() => {
        console.log("useEffect with dependency data" + { data });
        //It is rerendered every time the component is rendered or updated
    }, [data]);

    return (
        <div>
            <h2>useEffect Example</h2>
            <hr></hr>
            <br></br>

            <p>Count: {count}</p>
            <p>Data : {data}</p>
            <button onClick={() => setCount(count + 1)}>Increment</button>&nbsp;&nbsp;
            <button onClick={() => setData(data + 1)}>Update data</button>
            <p></p>
            <p>This component demonstrates the use of useEffect hook.</p>
        </div>
    )
}

export default ExampleUseEffect;