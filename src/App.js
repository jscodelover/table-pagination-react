import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./modules/home";
import Detail from "./modules/detail";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/user/:id" component={Detail} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
