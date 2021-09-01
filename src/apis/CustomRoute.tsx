import MyLayout from "../Layout";
import React from "react";
import { Route } from "react-router";

const CustomRoute = ({
  path,
  children,
}: {
  path: string;
  children: React.ReactChild;
  isRoot?: boolean;
}) => {
  const Page = () => <MyLayout>{children}</MyLayout>;
  return <Route path={path} component={Page} />;
};

export default CustomRoute;
