import MyLayout from "../Layout";
import React from "react";
import { Route } from "react-router";

const CustomRoute = ({
  path,
  Component,
}: {
  path: string;
  Component: React.FC;
}) => {
  const Page: React.FC = () => (
    <MyLayout>
      <Component />
    </MyLayout>
  );
  return (
    <Route path={path}>
      <Page />
    </Route>
  );
};

export default CustomRoute;
