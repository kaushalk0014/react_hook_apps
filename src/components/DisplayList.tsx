import React from 'react';
 

const DisplayList = () => {

    const [show, setShow] = React.useState(false);
    const [userInput, setUserInput] = React.useState("")
    const [listValue, setListValue] = React.useState<string[]>([]);
    const inputRef = React.useRef<HTMLInputElement>(null);


    const handelClick = () => {

        setShow(true);
        setListValue((prev) => [
            ...prev,
            userInput.trim()
        ]);
        setUserInput("");
        inputRef.current?.focus()
    }

    const handelChange = (value: string) => {
        setUserInput(value);
    }
    return (
        <>
            <div>
                <input type="text" ref={inputRef} value={userInput} onChange={(e) => handelChange(e.target.value)} placeholder="Enter text here" />
                <button onClick={() => handelClick()}>Submit</button>

                {show && (
                    listValue.length && listValue.map((item, index) => (
                        <div key={index}>
                            <li> {item}</li>
                        </div>
                    ))
                )}
            </div>
            
        </>
    )
};

export default DisplayList;