//import libraries
import React, { useState, useEffect, Fragment, useRef } from "react";
import { useClickOutside } from "../../../../helpers/clickOutside";
import { Box, Card, Button } from "../../../allComponents";
// COMPONENT
const SearchMenu = ({ setShowSearch }) => {
  // Logic
  const menu = useRef(null);
  useClickOutside(menu, () => {
    setShowSearch(false);
  });

  return (
    <Fragment>
      <Box>
        <div ref={menu}>
          <Card absolute border>
            <input type="search" placeholder="search" />
            <p>Recent</p> <Button>Edit</Button>
          </Card>
        </div>
      </Box>
    </Fragment>
  );
};

export default SearchMenu;
