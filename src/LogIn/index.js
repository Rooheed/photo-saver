import React, { Component } from "react";
import LogInView from "./LogInView";
import { withRouter } from "react-router";
import {fb,database} from '../database/config';

class LogInContainer extends Component {
  handleSignUp = async event => {
    event.preventDefault();
    const { email, password } = event.target.elements;
    try {
      const user = await fb
      //  .auth()
        .signInWithEmailAndPassword(email.value, password.value);
		 // Creating Global Variable.
		global.user = email.value;
		sessionStorage.setItem('user', email.value);
      this.props.history.push("/");
    } catch (error) {
      alert(error);
    }
  };

  render() {
    return <LogInView onSubmit={this.handleSignUp} />;
  }
  
}

export default withRouter(LogInContainer);

