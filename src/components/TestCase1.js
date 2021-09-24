import React, {useState} from 'react';

    const TestCase1 = (props) => {
    const [text, setText] = useState("");
    console.log(text);

    // const [text2, setText2] = useState("");
    // setText("state state I am setting state!!!");
    // console.log(text2);
    
    //When I do it this way I get too many re-renders as an error.

    return (
        <div>
            <h3>Set State for Test case 1</h3>
            <button onClick = { () => setText("state state I am setting state!!!") }>Click Here To Change State</button>
            <p>{ text }</p>

            {/* <div>
                <h3>This is the second way to test</h3>
                <p>{ text2 }</p>
            </div> */}

        </div>
    );
};

export default TestCase1;