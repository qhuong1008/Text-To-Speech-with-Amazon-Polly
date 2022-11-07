import React, { Component } from "react";

class DefaultLayout extends Component {
  render() {
    return (
      <div>
        <AppHeader />
        <AppContent />
        <AppFooter />
      </div>
    );
  }
}

export default DefaultLayout;
