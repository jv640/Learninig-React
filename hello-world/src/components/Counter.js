import React, { Component } from 'react'

class Counter extends Component {       // shortcut for class is rce  then tab

    constructor(props) {            // shortcut for constructor is rconst then tab
        super(props)
    
        this.state = {
            count : 0
        }
    }
    
    increment(){
        // this.setState({     // always modify using setState() otherwise it will not render the changes
        //     count : this.state.count + 1,
        // }, () => {console.log('CallBack value', this.state.count)}  // if you want to execute something just after 
        //                                                         // count then write after curly with comma
        //                                                         // this console is executed only after state update
        // )

        //so when you have to update state based on previous state then pass state value as parameter not 
        //regular object like implemented below
        this.setState(prevState => ({
            count : prevState.count + 1
         }))
        console.log(this.state.count)               // this one will be executed before the set is actually set
    }

    // react try to group multiple setState() into single action so for example we try to increment by five and we do
    // it by calling increment function five times
    
    incrementFive(){
        this.increment()
        this.increment()
        this.increment()
        this.increment()
        this.increment()
}

    // but this will not work because react trying to update current state by one so it just making +1 5 times 
    // to overcome this we have update prevState 

    render() {
        return (
            <div>
                <div>
                    Count - {this.state.count}
                </div>
                <button onClick = {() => this.incrementFive()}>Increment</button>
            </div>
        )
    }
}

export default Counter
