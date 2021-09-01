import React from "react";
import { Layout, Menu } from "antd";
import styled from "styled-components";
import { Link } from "react-router-dom";

const { Header, Footer, Content } = Layout;

const CutstomHeader = styled(Header)`
  padding: 0 10px;
  display: flex;
`;

const CustomContent = styled(Content)`
  padding-left: 10px;
`;

const CustomLayout = styled(Layout)`
  padding-top: 10px;
  margin: 0px;
`;

const Logo = styled(Link)`
  color: #ffffff;
  font-size: 30px;
  margin-left: 0;
  margin-right: 10px;
`;

export const MyLayout: React.FC = ({ children }) => {
  return (
    <Layout>
      <CutstomHeader className="header">
        <Logo to="/index">React-Practice</Logo>
        <Menu theme="dark" mode="horizontal">
          <Menu.Item key="contacts">
            <Link to="/contacts">Contacts</Link>
          </Menu.Item>
          <Menu.Item key="users">
            <Link to="/users">Users</Link>
          </Menu.Item>
        </Menu>
      </CutstomHeader>
      <CustomContent>
        <CustomLayout>
          <Content>{children}</Content>
        </CustomLayout>
      </CustomContent>
      <Footer>footer</Footer>
    </Layout>
  );
};

export default MyLayout;
