//import libraries
import React from "react";

import css from "./Avatar.module.css";

// COMPONENT
const Avatar = ({
  xs,
  s,
  sm,
  xl,
  src,
  style,
  onClickMenu,
  className,

  ...props
}) => {
  // Logic

  // var initialsUser = user?.name.match(/\b(\w)/g).join("");

  return (
    <React.Fragment>
      <div
        onClick={onClickMenu}
        style={style}
        className={[
          css.avatar,
          xs && css.avatar__xs,
          s && css.avatar__s,
          sm && css.avatar__sm,
          xl && css.avatar__xl,
          className,
        ].join(" ")}
      >
        <div
          className={[
            css.avatar__container,
            xs && css.avatar__container__xs,
          ].join(" ")}
        >
          <img
            className={css.avatar__image}
            layout="responsive"
            priority
            src={src}
            height={"100%"}
            width={"100%"}
          />
        </div>
      </div>
    </React.Fragment>
  );
};

//make this component available to the app
export default Avatar;
