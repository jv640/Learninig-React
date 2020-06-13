import React, { Component } from 'react'

 class ClassClick extends Component {

    clickHandler(){
        console.log('button is clicked');
        
    }
    render() {
        return (
            <div>
                <button onClick = {this.clickHandler} > click me!</button> 
                {/* just focus on how we are passing event on click   */}
            </div>
        )
    }
}

export default ClassClick
