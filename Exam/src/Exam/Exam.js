import React, { Component } from 'react'
import img1 from"../Images/ma.jpg"
import img2 from"../Images/ba.jpg"
import "../Exam/Exam.css"

export class Exam extends Component {
    constructor()
    {
        super();
        this.state = {
            count :0,
            count1 :0
           
        }
    }
    
    Mangofruit = () =>
    {
        this.setState({count:this.state.count+1})
    };

Bananaa = () => {
    this.setState({count1:this.state.count1+1})
};
  render() {
    return (
      <div>
<center>
  <fieldset>

         
         <h1>Suganya has {this.state.count} Mangoes and Surya has {this.state.count1} Bananas</h1>
         
         <img src={img1} alt='images'/>
         <img src={img2} alt='images'/> <br></br>
       <button onClick={this.Mangofruit}>Mango</button>
        <button onClick={this.Bananaa}>Banana</button>
        </fieldset>
        </center>
        
      </div>
    );
  }
}

export default Exam