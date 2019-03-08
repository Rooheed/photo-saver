import React, {Component} from 'react'
import Title from './Title'
import Photosaver from './Photosaver'
import AddPhoto from './AddPhoto'
import {Route, BrowserRouter as Router,NavLink } from 'react-router-dom'
import Single from './Single'
import LogOut from './Logout';
import PrivateRoute from "./PrivateRoute";
class Main extends Component {

    state = { loading: true,authenticated: true }

	
    componentDidMount() {
        this.props.startLoadingPost().then(() => {
            this.setState({loading: false,authenticated:true})
        })
        this.props.startLoadingComments()
    }
     
    render() {
        
		 const { authenticated, loading } = this.state;

    if (loading) {
      return <p>Loading...</p>;
    }
        return ( 
		<Router>
        <div>
            {/* <h1>
                <Link to="/"> Photosaver </Link>
            </h1> */}
            <Route exact path = "/" render={() => (
            <div>
                 <div  className="header-1">
                    <Title title={'Photosaver'}/> 
                    <p className="p-1">Easy to save photos</p>
                    <a className="logout" href="/login" >Logout</a>
                </div>
                
            <Photosaver {...this.props}/>
        
            </div>
            )}/>

			
            <PrivateRoute path= "/AddPhoto" component={({history}) => (
                <AddPhoto {...this.props} onHistory={history}/>
            )}authenticated={authenticated}/>

            <PrivateRoute path="/single/:id" authenticated={authenticated} component = {(params) => (
                <Single loading={this.state.loading} {...this.props} {...params} />
            )}/>
                    
            </div>
			</Router>
        )
    }
	
}


export default Main