import React from "react";
import {
  Route,
  Redirect
} from "react-router-dom";


const ProtectedRoute = ({ component: Comp, loggedIn, path, ...rest }) => {
    return (
      <Route
        path={path}
        {...rest}
        render={(props) => {
          return loggedIn ? (
            <Comp {...props} /> 
          ) : (
            <Redirect 
                to="/admin-login" 
            />
        );
        }}
      />
    );
  };

export { ProtectedRoute };