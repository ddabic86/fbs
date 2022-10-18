//import libraries
import React, { useState, useEffect, Fragment } from "react";
import { useSelector } from "react-redux";
import { Avatar, SearchMenu, Menu } from "../../allComponents";
import { RiMenuFill } from "react-icons/ri";

import css from "./Header.module.css";
import Link from "next/link";
// COMPONENT
const Header = ({ props }) => {
  // Logic
  const { auth } = useSelector((state) => state.user);

  const [showSearch, setShowSearch] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  return (
    <Fragment>
      <div className={css.header}>
        <div className={css.header_left}>
          <RiMenuFill
            size={26}
            color={"black"}
            onClick={() => setShowMenu(true)}
          />
        </div>
        <div className={css.header_center}>
          <input
            onClick={() => setShowSearch(true)}
            type="search"
            placeholder="search"
          />
        </div>

        <div className={css.header_right}>
          <Link href="/login">
            <a>
              <Avatar xs src={auth?.picture} />
            </a>
          </Link>
        </div>
      </div>
      {showSearch && <SearchMenu setShowSearch={setShowSearch} />}
      {showMenu && <Menu setShowMenu={setShowMenu} />}
    </Fragment>
  );
};

export default Header;
