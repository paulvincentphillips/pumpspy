import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import * as ROUTES from "./constants/routes";
import { Home, Signin, Signup } from "./pages";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route
          exact
          path={ROUTES.HOME}
          render={(props) => <Home {...props} />}
        />
        <Route
          exact
          path={ROUTES.SIGN_IN}
          render={(props) => <Signin {...props} />}
        />
        <Route
          exact
          path={ROUTES.SIGN_UP}
          render={(props) => <Signup {...props} />}
        />
      </Switch>
    </Router>
  );
};

export default App;
