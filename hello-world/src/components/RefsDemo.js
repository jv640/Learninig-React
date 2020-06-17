import React, { Component } from 'react'

 class RefsDemo extends Component {

    constructor(props) {
        super(props)
    
        this.inputRef = React.createRef()
    }

    componentDidMount() {
        this.inputRef.current.focus()
        console.log(this.inputRef)
    }
    
    clickHandler = () => {
        alert(this.inputRef.current.value)
    }
    render() {
        return (
            <div>
                {/* this is done to get focus on input field when page is loaded */}
                <input type= 'text' ref = {this.inputRef}  />
                <button onClick={this.clickHandler}>click me!</button>
            </div>
        )
    }
}

export default RefsDemo
