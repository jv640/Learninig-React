import React, { Component } from 'react';




 class UserGreeting extends Component {


    constructor(props) {
        super(props)
    
        this.state = {
             isLoggedIn : false
        }
    }

    render() {

        // this is first method if-else rendering
        // if(this.state.isLoggedIn){
        //     return(
        //         <div>
        //             Hello Jatin
        //         </div>
        //     )
        // } else{
        //     return(
        //         <div>
        //             Hello Guest
        //         </div>
        //     )
        // }

        // method 2 element rendering

        // let message

        // if(this.state.isLoggedIn){
        //     message = <div> Hello Jatin</div>
        // }else {
        //     message = <div> Hello Guest</div>
        // }

        // return(
        // <div>{message}</div>
        // )


        // method 3 ternary conditional method

        // return (
        //     this.state.isLoggedIn ? <div>Hello Jatin</div> : <div>Hello Guest</div>
        // )

        // method 4 shrot circuit 

        return (
            this.state.isLoggedIn && <div> Hello Jatin</div>
        )

        // return (
        //     <div>
                
        //     </div>
        // )
    }
}

export default UserGreeting
