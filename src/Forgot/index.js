import React, { Component } from "react";
import ForgotView from "./ForgotView";
import { withRouter } from "react-router";
import {fb,database} from '../database/config';

class ForgotContainer extends Component {
  handleAuth = async event => {
    event.preventDefault();
    const { email} = event.target.elements;
    try {
      const user = await fb
        .sendPasswordResetEmail(email.value).then(function() {
   alert("Email successfully sent");
}).catch(function(error) {
   alert(error);
});
      this.props.history.push("/login");
    } catch (error) {
      alert(error);
    }
  };

  render() {
    return <ForgotView onSubmit={this.handleAuth} />;
  }
}

export default withRouter(ForgotContainer);
