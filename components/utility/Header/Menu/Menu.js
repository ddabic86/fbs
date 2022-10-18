//import libraries
import Link from "next/link";
import React, { Fragment, useRef } from "react";
import { useClickOutside } from "../../../../helpers/clickOutside";
import { Box, Card, Button } from "../../../allComponents";
// COMPONENT
const Menu = ({ setShowMenu }) => {
  // Logic
  const menu = useRef(null);
  useClickOutside(menu, () => {
    setShowMenu(false);
  });

  return (
    <Fragment>
      <Box>
        <div ref={menu}>
          <Card absolute border>
            <p>Settings</p>
            <Link href="/">
              <a>
                <p>Home</p>
              </a>
            </Link>
            <p>Dark Mode</p>
            <p>Logout</p>
          </Card>
        </div>
      </Box>
    </Fragment>
  );
};

export default Menu;
