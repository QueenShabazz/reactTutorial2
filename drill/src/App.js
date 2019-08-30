import React from 'react';

class HelloWorld extends React.Component{
	constructor(props) {
		super(props)
		this.state= { who: 'world' }
  }
    render () {
      return (
        <div> 
          <p> Hello, {this.state.who}</p>
          <button id="friend" onClick={renderFriend}> Friend</button>
          <button id="world" onClick={renderWorld}> World</button>
          <button id="react" onClick={renderReact}> React</button>
        </div>  
      )
      function renderFriend () {
        document.querySelector('p').innerHTML= 'Hello,friend!';
      }
      function renderWorld () {
        document.querySelector('p').innerHTML= 'Hello,world!';
      }
      function renderReact () {
        document.querySelector('p').innerHTML= 'Hello,react!';
      }
  }
}



  
export default HelloWorld
