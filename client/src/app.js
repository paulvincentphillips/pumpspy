import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import * as ROUTES from "./constants/routes";
import { Home, Signin, Signup } from "./pages";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const checkAuthenticated = async () => {
    try {
      const res = await fetch("/auth/verify", {
        method: "GET",
        headers: { jwt_token: localStorage.token },
      });

      const parseRes = await res.json();
      parseRes === true ? setIsAuthenticated(true) : setIsAuthenticated(false);
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    checkAuthenticated();
  }, []);

  const setAuth = (boolean) => {
    setIsAuthenticated(boolean);
  };
  return (
    <>
    <ToastContainer theme="colored"/>
    <Router>
      <Switch>
        <Route
          exact
          path={ROUTES.HOME}
          render={(props) => (
            <Home
              {...props}
              setAuth={setAuth}
              isAuthenticated={isAuthenticated}
            />
          )}
        />
        <Route
          exact
          path={ROUTES.SIGN_IN}
          render={(props) =>
            !isAuthenticated ? (
              <Signin {...props} setAuth={setAuth} />
            ) : (
              <Redirect to={ROUTES.HOME} />
            )
          }
        />
        <Route
          exact
          path={ROUTES.SIGN_UP}
          render={(props) =>
            !isAuthenticated ? (
              <Signup {...props} setAuth={setAuth} />
            ) : (
              <Redirect to={ROUTES.HOME} />
            )
          }
        />
      </Switch>
    </Router>
    </>
  );
};

export default App;
