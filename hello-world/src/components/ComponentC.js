import React, { Component } from 'react'
import { UserConsumer } from './Context'

export class ComponentC extends Component {
    render() {
        return (
            <div>
                <UserConsumer>
                    {
                        (userName) => {
                            return <div>Hello {userName}</div>
                        }
                    }
                </UserConsumer>
            </div>
        )
    }
}

export default ComponentC
