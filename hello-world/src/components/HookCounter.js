// As we know state can only be used inside a class component.
// So to implement counter funcitonality inside a functional component using state we need Hooks

// we can use state by using a function called useState() it takes initial value as arguement and return 
// 2 values one is current value of state and other is a updating function
import React, { useState } from 'react'

function HookCounter() {
    const initialCount = 0;    
    const [count, setcount] = useState(initialCount); // we can use any name inplace of count and setcount.
                                                    // count is variable and setcount is function
    const incrementByFive = () => {
        for(let i = 0; i<5; i++){
            // setcount(count + 1);
            // Here value is incremented by only 1 not 5 because this is not a safe way we should have a function
            // which accept old value as arguement and output new value 
            setcount(prevCount => prevCount + 1)
            // and we should do same for other updation in state also 
        }
    }
    return (
        <div>
            {/* <button onClick={ () => setcount(count + 1)}>counter {count}</button> */}

            count : {count}
            <button onClick={ () => setcount(initialCount)}>Reset</button>
            <button onClick={ () => setcount(prevCount => prevCount + 1)}>Increment</button>
            <button onClick={ () => setcount(prevCount => prevCount - 1)}>Decrement</button>
            <button onClick={incrementByFive}>Increment by 5</button>
            
        </div>
    )
}

export default HookCounter
