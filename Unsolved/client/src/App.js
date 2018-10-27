import React from "react";
import Books from "./pages/Books";
import Detail from "./pages/Detail";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";
import Router from "react-router-dom"

const App = () => (
  <div>
    <Nav />
    <Switch>
      <Route path="/" component={Book} />
      <Route path="/books" component={Books} />
      <Route path="/books/:id"  component={Detail}/>
      <Route component={NoMatch} />
    </Switch>
    <Books />
  </div>

);

export default App;
