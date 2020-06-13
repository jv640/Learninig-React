import React from 'react'

// function Greet(){
//     return <h1>Hello Jatin </h1>
// }

const Greet = (props) => {
    return (
        <div>
            <h1> 
                Hello {props.name} a.k.a. {props.heroName}. 
            </h1>
            {props.children}
        </div>
    )
    
}      // arrow function

//we can export it with file name also for that we have to put export before const and then we have to export it 
// in App.js with the same name with wch we gonna import it as
// import anyname from 'location'
// <anyname />

export default Greet