import React, {Component} from 'react'

class Welcome extends Component {
    render () {
        return <h1>Welcome {this.props.name} a.k.a. {this.props.heroName}.</h1>       
        // here we are returning jsx not simple HTML
    }
}

export default Welcome