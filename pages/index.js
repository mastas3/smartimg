import React, { Component } from 'react';
import Nav from './Nav'
import App from './App'
// import Link from 'next/link'


class Home extends Component{
  constructor(props){
    super(props);
    this.state={

    }
  }

  render(){
    return (
      <div>
        <Nav/>
        <App/>
      </div>
    )
  }
}

export default Home;
