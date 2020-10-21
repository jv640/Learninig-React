import React from 'react'

const UserContext = React.createContext()
//  context is created using createcontext any context created by react createcontxt come with 2 things
//  Provider and consumer here we are just giving them easyto use names 
// now for 2nd step we have to give them value
// and for 3rd we have to consume value
const UserProvider = UserContext.Provider
const UserConsumer = UserContext.Consumer

export {UserProvider, UserConsumer}