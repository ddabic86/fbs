//import libraries
import React, { useState, useEffect, Fragment } from "react";

import css from "./Card.module.css";
// COMPONENT
const Card = ({ children, absolute, border }) => {
  // Logic

  return (
    <Fragment>
      <div
        className={[
          css.card,
          absolute && css.card_absolute,
          border && css.card_border,
        ].join(" ")}
      >
        {children}
      </div>
    </Fragment>
  );
};

export default Card;
