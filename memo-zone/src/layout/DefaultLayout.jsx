import React, { Component } from "react";
import AppContent from "../components/AppContent";
import AppHeader from "../components/AppHeader";
class DefaultLayout extends Component {
  render() {
    return (
      <>
        <AppHeader />
        <AppContent />
      </>
    );
  }
}

export default DefaultLayout;
