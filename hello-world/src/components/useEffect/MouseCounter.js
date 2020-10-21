import React, { useState } from 'react'
import Hookmouse from './Hookmouse'

function MouseCounter() {
    const [display, setDisplay] = useState(true)
    return (
        <div>
            <button onClick={() => setDisplay(!display)}> Toggle Display</button>
            {display && <Hookmouse />}
        </div>
    )
}

export default MouseCounter
