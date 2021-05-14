import React from "react";

// Components
import Navigation from "../components/Navigation";
import Router from "../routes";

const Layout = () => {
  return (
    <>
      <Navigation />
      <main style={{ padding: "2rem" }}>
        <Router />
      </main>
    </>
  );
};

export default Layout;
