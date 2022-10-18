//import libraries
import React, { useState, useEffect, Fragment, useRef } from "react";
import { Post } from "../components/allComponents";
import Header from "../components/utility/Header/Header";
import { useClickOutside } from "../helpers/clickOutside";

// COMPONENT
const Index = ({ props }) => {
  // Logic

  return (
    <Fragment>
      <Header />
      <div style={{ marginTop: "70px" }}>
        <Post />
      </div>
    </Fragment>
  );
};

export default Index;
