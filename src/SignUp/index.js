import React, { Component } from "react";
import SignUpView from "./SignUpView";
import { withRouter } from "react-router";
import {fb,database} from '../database/config';

class SignUpContainer extends Component {
  handleSignUp = async event => {
    event.preventDefault();
    const { email, password } = event.target.elements;
    try {
      const user = await fb
        //.auth()
        .createUserWithEmailAndPassword(email.value, password.value);
		sessionStorage.setItem('user', email.value);
      this.props.history.push("/");
    } catch (error) {
      alert(error);
    }
  };

  render() {
    return <SignUpView onSubmit={this.handleSignUp} />;
  }
}

export default withRouter(SignUpContainer);
