import React from "react";
import { Switch, Route } from "react-router-dom";
import AllUserPage from "./pages/AllUserPage";

function App() {
  return (
    <>
      <Switch>
        <Route path="/users" component={AllUserPage} />
        <Route path="/users/:id" />
      </Switch>
    </>
  );
}

export default App;
