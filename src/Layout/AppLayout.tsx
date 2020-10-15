import React, { Fragment } from 'react';
import AppContent from './AppContent';
import AppMenu from './AppMenu';

class AppLayout extends React.Component {
  render(){
    return (
      <Fragment>
        <AppMenu />
        <AppContent />
      </Fragment>
    )
  }
}

export default AppLayout;