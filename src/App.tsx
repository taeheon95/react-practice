import React from "react";
import { Switch } from "react-router-dom";
import CustomRoute from "./apis/CustomRoute";
import AllUserPage from "./pages/AllUserPage";
import ContactPage from "./pages/ContactPage";
import IndexPage from "./pages/IndexPage";

function App() {
  return (
    <>
      <Switch>
        <CustomRoute path="/index">
          <IndexPage />
        </CustomRoute>
        <CustomRoute path="/users">
          <AllUserPage />
        </CustomRoute>
        <CustomRoute path="/contacts">
          <ContactPage />
        </CustomRoute>
      </Switch>
    </>
  );
}

export default App;
