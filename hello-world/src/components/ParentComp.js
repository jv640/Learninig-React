import React, { Component, memo } from 'react'
import RegComp from './RegComp'
import PureComp from './PureComp'
import Memo from './Memo'

 class ParentComp extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             name: 'Jatin'
        }
    }

    componentDidMount(){
        setInterval(() => {
            this.setState({
                name: 'Jatin'
            })
        }, 2000)
    }
    
    render() {
        console.log('************ Parent Component  render ***********')
        // Now the difference is if there are not change then pure component renders only once while regular component
        // render irrespective of that there is change or not
        // This is only for class component but we want this functionality for functional component as well
        // for that we going to use React.memo
        return (
            <div>
                Parent Component
                {/* <PureComp name = {this.state.name}/>
                <RegComp name = {this.state.name}/> */}
                <Memo />
            </div>
        )
    }
}

export default ParentComp
