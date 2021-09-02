import React from "react";
import { Redirect, Switch } from "react-router-dom";
import CustomRoute from "./apis/CustomRoute";
import AllUserPage from "./pages/AllUserPage";
import ContactPage from "./pages/ContactPage";
import IndexPage from "./pages/IndexPage";
import ContactEditPage from "./pages/ContactEditPage";

function App() {
  return (
    <>
      <Switch>
        <CustomRoute path="/index" Component={IndexPage} />
        <CustomRoute path="/users" Component={AllUserPage} />
        <CustomRoute path="/contacts" Component={ContactPage} />
        <CustomRoute path="/editContact/:id" Component={ContactEditPage} />
        <Redirect path="*" to="/index" />
      </Switch>
    </>
  );
}

export default App;
