// we want to make a counter and show it in title of page we can acheive thi using class component 
// but there we have to use life cycle methods like componentDidMount and componentUpdate and 
// we need to write same code twice one for initial render and then for update component now on 
// render update will get called and execute lines in it. 
// we can achieve the same using useEffect it can give functionality of lifecylce methods
// and it is also a function which accept function as a arguement and execute this func after every render

import React, { useEffect, useState } from 'react'


function TitleCounter() {
    const [count, setcount] = useState(0);
    useEffect(() => {
        document.title = `You clicked ${count} times`
    })
    return (
        <div>
            <button onClick={ () => setcount(prevCount => prevCount + 1)}>you clicked {count} times</button>
        </div>
    )
}

export default TitleCounter
