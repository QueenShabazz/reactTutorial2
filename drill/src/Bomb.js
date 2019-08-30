import React from 'react';

class Bomb extends React.Component{
	constructor(props) {
		super(props)
		this.state = { count: 0 }
  }
  
  render () {
      return (
        <div> 
          <p>  </p>
        </div>  
      )
      function renderWord () {
          function mountNow() {
            this.interval = 
            setInterval(() => {
                this.setState({
                    datetime: new Date ()
                })
            }, 1000 )
            }
        function mountSoon(){
                clearInterval(this.interval)
            }
        let count = mountSoon;
        if (count % 2 === 0){
              document.querySelector('p').innerHTML = "tick";
          }
        if (count % 2 !== 0){
            document.querySelector('p').innerHTML = "tock";
        }
        else if (count => 8){
            document.querySelector('p').innerHTML = "BOOM!!!!";
            }
        }
  }
  
}

export default Bomb