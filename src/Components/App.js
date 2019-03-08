import Main from './Main'
import Home from './home'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import * as actions from '../redux/actions'
import {withRouter} from 'react-router'

import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import PrivateRoute from "./PrivateRoute";
import {fb,database} from '../database/config';
import LogIn from "../LogIn";
import SignUp from "../SignUp";
import Forgot from "../Forgot";
import AddPhoto from './AddPhoto'
import Single from './Single'
class App extends Component {
	
	
  state = { loading: true, authenticated: false, user: null };

  
  componentWillMount() {
    fb.onAuthStateChanged(user => {
      if (user) {
        this.setState({
          authenticated: true,
          currentUser: user,
          loading: false
        });
      } else {
        this.setState({
          authenticated: false,
          currentUser: null,
          loading: false
        });
      }
    });
  }

  render() {
    const { authenticated, loading } = this.state;

    if (loading) {
      return <p>Loading..</p>;
    }

    return (
      <Router>
        <div>
          <PrivateRoute
            exact
            path="/"
            //component={<Home{...this.props} />}
			component={Home}
            authenticated={authenticated}
			
          />
          <Route exact path="/login" component={LogIn}  />
          <Route exact path="/signup" component={SignUp} />
		  <Route exact path="/forgot" component={Forgot} />
		   
        </div>
      </Router>
    );
  }
  

}

  function mapStateToProps(state) {
    return {
        posts: state.posts,
        comments: state.comments
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(actions, dispatch)
}
//App = withRouter(
  //connect(mapStateToProps, mapDispatchToProps)(App)
//)

export default App;
