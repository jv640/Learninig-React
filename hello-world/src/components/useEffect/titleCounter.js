// we want to make a counter and show it in title of page we can acheive thi using class component 
// but there we have to use life cycle methods like componentDidMount and componentUpdate and 
// we need to write same code twice one for initial render and then for update component now on 
// render update will get called and execute lines in it. 
// we can achieve the same using useEffect it can give functionality of lifecylce methods
// and it is also a function which accept function as a arguement and execute this func after every render

import React, { useEffect, useState } from 'react'


function TitleCounter() {
    const [count, setcount] = useState(0);
    const [name, setname] = useState('');    
    // useEffect(() => {
    //     console.log('useEffect - updating document title')
    //     document.title = `You clicked ${count} times`
    // })
    
    // Here in above useEffect we can se it is getting executed after each letter typed in input but however count 
    // value isn't changing still it is updating that we can handle this in class component using some arguement
    // in lifecycle method and to do same in useEffect we have to pass another arguement which is array of elements
    // to which useEffect is sensitive whenever element in that array changes useEffect get executed
    useEffect(() => {
        console.log('useEffect - updating document title')
        document.title = `You clicked ${count} times`
    }, [count])
    return (
        <div>
            <input type="text" value={name} onChange={ e => setname(e.target.value)}/>
            <button onClick={ () => setcount(prevCount => prevCount + 1)}>you clicked {count} times</button>
        </div>
    )
}

export default TitleCounter
