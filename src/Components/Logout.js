import React from 'react';
import {fb,database} from '../database/config';
const logOutUser = () => {
 fb.signOut();
};
const LogOut = () => {
 return <button type="button" onClick={logOutUser} children="Log Out"> </button>;
};
export default LogOut;