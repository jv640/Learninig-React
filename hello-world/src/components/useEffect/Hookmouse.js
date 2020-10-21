import React, { useEffect, useState } from 'react'

function Hookmouse() {
    const [x, setx] = useState(0)
    const [y, sety] = useState(0)

    const logMousePosition = (e) => {
        console.log('mouse moved')
        setx(e.clientX)
        sety(e.clientY)

    }
    // if we want to implement functionality of componentUnmount then in useEffect the input function can return
    // a function which can b used to unmount component or relation 
    useEffect(() => {
        console.log('useEffect called');
        window.addEventListener('mousemove', logMousePosition)
        return () => {
            console.log('component unmounted')
            window.removeEventListener('mousemove', logMousePosition)
        }
    }, [])
    return (
        <div>
            Hooks X - {x} Y - {y}
        </div>
    )
}

export default Hookmouse
