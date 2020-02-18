import React, { Component } from "react";
import { connect } from "react-redux";
import { addPerson } from "../Redux/Actions"

class AddPerson extends Component {
  constructor(props) {
    super(props);
    this.state = {
    newPerson: "",
    persons: [
      // {id:'1', name:'Surbhi', j:0},
      // {id:'2', name:'Sandeep', j:0}
      // {id:'3', name:'Meet', j:0},
      // {id:'4', name:'Neel', j:0},
      // {id:'5', name:'Akash', j:0},
      // {id:'6', name:'Tejaswini', j:0},
      // {id:'7', name:'Krishna', j:0},
      // {id:'8', name:'Kartik', j:0},
      // {id:'9', name:'Yash', j:0}
    ]
  };
  }

  addPersonHandler(e) {
    this.setState({newPerson: e.target.value});

  }

  addPerson(e){
    this.props.addPerson(this.state.newPerson);
    this.setState({persons: ""});
  }


  render() {
    return (
      <div className="App"> <br/> <br/>
        <label>Add Person</label><br />
        <input type="text"  onChange={this.addPersonHandler.bind(this)} />  <br />
        <button onClick={this.addPerson.bind(this)}>Add Person</button> <br /> <br />
      </div>
    )
  }
}

export default connect(null,{ addPerson })(AddPerson);
