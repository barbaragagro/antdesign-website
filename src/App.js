import React from 'react';
import './App.css';

import AppHeader from './components/common/header';
import AppHome from './views/home';
import {  Layout } from 'antd';
import AppFooter from './components/common/footer';
import { Footer } from 'antd/es/layout/layout';
const { Header, Content } = Layout;



function App() {
  return (
    <Layout className="mainLayout">
      <Header>
        <AppHeader/>
        
      </Header>
      <Content>
        <AppHome/>
      </Content>
      <Footer>
        <AppFooter/>
      </Footer>
  </Layout>

  );
}

export default App;
