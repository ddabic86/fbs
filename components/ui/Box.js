//import libraries
import React, { Fragment } from "react";

import css from "./Box.module.css";

// COMPONENT
const Box = (props) => {
  // Logic
  const {
    children,
    start,
    border,
    noPadding,
    transparent,
    centered,
    wrap,
    row,
    grid,
    scroll,
    focus,
    overlay,
    modal,
    className,
  } = props;

  return (
    <Fragment>
      <div
        {...props}
        className={[
          css.box,
          start && css.box__start,
          border && css.box__border,
          noPadding && css.box__noPadding,
          transparent && css.box__transparent,
          centered && css.box__centered,
          wrap && css.box__wrap,
          row && css.box__row,
          grid && css.box__grid,
          scroll && css.box__scroll,
          focus && css.box__focus,
          overlay && css.box__overlay,
          modal && css.box__modal,
          className,
        ].join(" ")}
      >
        {children}
      </div>
    </Fragment>
  );
};

export default Box;
