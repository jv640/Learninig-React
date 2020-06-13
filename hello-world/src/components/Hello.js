import React from 'react'

const Hello = () => {
    // return (
    //     <div>
    //         <h1> Implementing JSX</h1>
    //     </div>
    // )

    // here we implemented JSX implicitly

    // now exeplicitly redering html

    return React.createElement(
        'div',
        {id : 'hello', className: 'dummyClass'},
        React.createElement('h1', null, 'this is jsx explicit implementation'))
}

export default Hello