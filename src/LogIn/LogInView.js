import React from "react";

const LogInView = ({ onSubmit }) => {
  return ( 
<div>
<div  className="header-1">
             <h1>Photosaver</h1>
              <p className="p-1">Easy to save photos</p>
              <a className="logout" href="/login" >Logout</a>
 
        </div>
      <form class="form" onSubmit={onSubmit}>
        <label>
          Email
          <input
            style={{ width: "100%" }}
            name="email"
            type="email"
            placeholder="Email"
          />
        </label>
        <label>
          Password
          <input
            style={{ width: "100%" }}
            name="password"
            type="password"
            placeholder="Password"
          />
        </label>
        <button type="submit">Log in</button>		
		 <br/><br/><br/>
	    <a href="/signup" class="button">Sign Up</a>
		 <br/><br/><br/>
		<a href="/forgot">Forgot Your Password?</a>
      </form>
    </div>
  );
};

export default LogInView;
