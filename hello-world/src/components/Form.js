import React, { Component } from 'react'

class Form extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             username : '',
             comment : '',
             topic: ''
        }
    }

changeUsernameHandler = (event) => {
    this.setState({
        username: event.target.value
    })
}

changeCommentHandler = event => {
    this.setState({
        comment : event.target.value
    })
}

changeTopicHandler = event => {
    this.setState({
        topic: event.target.value
    })
}

FormHandler = event => {
    alert(`${this.state.username} ${this.state.comment} ${this.state.topic}`)
    event.preventDefault()
}
    render() {
        // if you dont want to write this.state.property fully then destructe them
        const {username, comment, topic} = this.state
        // now you can remove this.state and can directly write username, comment, and topic
        return (
            <form onSubmit = {this.FormHandler}>
                <div>
                    <label>username</label>
                    <input type = 'text' value = {username} onChange = {this.changeUsernameHandler}/>
                </div>
                <div>
                    <label>comments</label>
                    <textarea value = {comment} onChange = {this.changeCommentHandler}/>
                </div>
                <label>topic</label>
                <select value = {topic} onChange = {this.changeTopicHandler}>
                    <option value = 'react'>React</option>
                    <option value = 'angular'>Angular</option>
                    <option value = 'vue'>Vue</option>
                </select>
                <div>
                    <button type = 'submit'>submit</button>
                </div>
            </form>
        )
    }
}

export default Form
