import "./App.css";
import Header from "./components/layout/Header";
import Main from "./components/layout/Main";
import Footer from "./components/layout/Footer";
import Home from "./src/home/Home";
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import Contactanos from "./contactanos/Contactanos";

function App() {
  return (
    <> 
    <Router>
      <Header />
      <Switch>
        <Route path="/Home">
          <Main>
          <Home />
          </Main>
        </Route>
        <Route path="/Contactanos">
        <Main>
      <Contactanos />
      </Main>
        </Route>
      </Switch>
      <Footer />
    </Router> 
    </>
  );
}

export default App;