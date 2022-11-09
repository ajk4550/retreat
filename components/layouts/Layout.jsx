import React from 'react';
import Navigation from './Navigation';

const Layout = (props) => (
  <div>
    <Navigation />
    <div className="layout">{props.children}</div>
  </div>
);

export default Layout;
