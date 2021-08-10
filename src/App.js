import { HeaderContainer } from "./containers/header";
import { StationsContainer } from "./containers/stations";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Route exact path={"/"}>
        <HeaderContainer />
        <StationsContainer />
      </Route>
    </Router>
  );
}

export default App;
