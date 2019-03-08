import React from "react";

const ForgotView = ({ onSubmit }) => {
  return (
    <div>
      <h1>Log in</h1>
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
        <button type="submit">Reset</button>		
      </form>
    </div>
  );
};

export default ForgotView;
