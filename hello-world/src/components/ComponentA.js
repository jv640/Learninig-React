// we need to use some parameter in component C so we are seeing how we can pass them in different diff levels
// struct is like
    // ComponentA      ComponentB      ComponentC
    // {user name}         |               |
    //                 ComponentD      ComponentE              |
    //                 {user name}         |
    //                                 ComponentF
    //                                 {user name}

// we want to access username from A to D and F now we have to pass them through B and C and E we are seeing simple
// version A->B->C

// now context can be done in three step 1. create 2. provide value 3 consume value
import React, { Component, version } from 'react'
import ComponentB from './ComponentB'
import { UserProvider } from './Context'

class ComponentA extends Component {
    render() {
        return (
            <div>
                <UserProvider value="jatin">    
                 {/* we had given value now we will consume wherever we want to */}
                    <ComponentB/>
                </UserProvider>
            </div>
        )
    }
}

export default ComponentA
