import React, { Component } from 'react'

class EventBind extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             message: 'Hello there'
        }

        // this.clickHandler = this.clickHandler.bind(this)         //method 3
    }

    // clickHandler() {
    //     this.setState({
    //         message : 'Goodbye!!'
    //     })
    // }


    //method 4
    clickHandler = () => {
        this.setState({
            message : 'Goodbye!!'
        })
    }
    

    render() {
        return (
            <div>
                <div>{this.state.message}</div>
                {/* <button onClick = {this.clickHandler}>click me!</button>  by using this. text will not change */}
                                        {/* as object will not be defined inside 'this.state' */}
    
          {/* so we will bind events here below is method 1 but not much used as it will bind everytime it render*/}
                {/* <button onClick = {this.clickHandler.bind(this)}>click me!</button> */}

            {/* method 2 by calling eventhandler uing arrow function  */}
            {/* <button onClick = { () => this.clickHandler()}>click me!</button> */}
                
                {/* method is to bind event handler in constructor rather than render method 
                this approach is better as it bind only once not every time whn rendering happen*/}
                {/* <button onClick = {this.clickHandler}>click me!</button> */}

                {/* method 4 is to define clickHandler as arrow function in class this method is also good like 3rd */}
                <button onClick = {this.clickHandler}>click me!</button>
                
            
            </div>
        )
    }
}

export default EventBind
