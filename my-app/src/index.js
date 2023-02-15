import React, { Component } from 'react'
import HomePage from './Conditional_Rendering/HomePage'
import LoginPage from './Conditional_Rendering/LoginPage'

 class Conditional_Rendering extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
       isloggedin : false
    }
  }
  render() {
    if(this.state.isloggedin){
      return <HomePage/>
    }
   else{
      return <LoginPage/>
    }
  }
}
export default Conditional_Rendering