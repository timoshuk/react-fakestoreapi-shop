import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import store from "./redux/store";
import AppContainer from "./components/app-container";
import Header from "./components/header/Header";
import Home from "./pages/home";

import "./App.css";
import ProductPage from "./pages/ProductPage/ProductPage";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <AppContainer>
          <Header />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/product/:id">
              <ProductPage />
            </Route>
            <Route path="*">
              <h1>404</h1>
            </Route>
          </Switch>
        </AppContainer>
      </Router>
    </Provider>
  );
}

export default App;
