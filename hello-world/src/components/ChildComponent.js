import React from 'react'

function ChildComponent(props) {
    return (
        <div>
            {/* this is to call parent component function in childe  */}
            {/* <button onClick ={props.greetHandler} >Greet Parent</button> */}
            
            {/* now lets see to call child from Parent */}
            <button onClick ={ () => props.greetHandler('child')} >Greet Parent</button> 

        </div>
    )
}

export default ChildComponent
