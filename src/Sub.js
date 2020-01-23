import React, {Component} from 'react';
import './Sub.css';

class Sub extends Component{

  constructor(props) {
    super(props);
    this.state = {
      first: 0,
      second: 0,
      sub: 0
    };
  }

  handleFirstNumber = event => {
    this.setState({
      first: Number(event.target.value)
    });
  };

  handleSecondNumber = event => {
    this.setState({
      second: Number(event.target.value)
    });
  };

  hanndleClick = () => {
    let x = this.state.first - this.state.second;
    this.setState({
      sub : x
    });
  };

  render(){
    return(
        <div className="container">
          <div className="card">
            <div className="card-header text-center">
              Sub
            </div>
            <div className='card-body text-center'>
              <div className='row'>
                <label>First Number : </label>
                <input type='number' step = "0.01" className="form-control" onChange={this.handleFirstNumber}/>
                <br/>
                <label>Second Number : </label>
                <input type='number' step = "0.01" className="form-control" onChange={this.handleSecondNumber}/>
                <br/>
                <input type='button' value='sub' className="form-control btn-primary" onClick={this.hanndleClick}/>
                <br/>
                <label> Sub : {this.state.sub} </label>
              </div>
            </div>
          </div>
        </div>
    );
  }
}

export default Sub; 