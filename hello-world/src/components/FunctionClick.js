import React from 'react'

function clickHandler(){
    console.log('button clicked')
}

function FunctionClick() {
    return (
        <div>
            <button onClick = {clickHandler} >click</button>
        </div>
    )
}

export default FunctionClick
