import React, { useState } from 'react';

const TestCase2 = (props) => {
    const [state, setState] = useState({
            items: ["Cabbage"],
            totalPrice: 0.00
        });
    console.log(state.items);
    console.log(state.totalPrice);

    return (
        <div>
            <h3>Items!!</h3>
            <button onClick = { () => setState({ items: state.items, totalPrice: state.totalPrice + 10.99 })}> Cabbage Button </button>
            <p>
                { state[0] }
                { state[1] }
            </p>
        </div>
    );
};

TestCase2.propTypes = {
    
};

export default TestCase2;