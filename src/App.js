import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Products from "./pages/Products";
import Home from "./pages/Home";
import Header from "./components/Header";
import News from "./pages/News";
import Newsletter from "./pages/Newsletter";
import Contact from "./pages/Contact";

export default function App() {
  return (
      <Router>
        <div>
          <nav>
           <Header/>
          </nav>
          <Switch>
            <Route path="/products">
              <Products />
            </Route>
            <Route path="/news">
              <News />
            </Route>
            <Route path="/newsletter">
              <Newsletter />
            </Route>
            <Route path="/contact">
              <Contact />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>
  );
}



function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}
