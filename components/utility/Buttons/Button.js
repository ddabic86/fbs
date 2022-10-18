import Link from "next/link";
import React from "react";

import css from "./Button.module.css";
import { LoaderBuffer } from "../../allComponents";

const linkButton = ({ link, children, className, href, ...props }) => {
  return (
    <Link href={href} {...props}>
      <a className={className}>{children}</a>
    </Link>
  );
};
const baseButton = ({ type, children, disabled, onClick, ...props }) => {
  return (
    <button onClick={onClick} disabled={disabled} type={type} {...props}>
      {children}
    </button>
  );
};

const Button = ({
  fullWidth,
  round,
  filled,
  filledRed,
  filledLight,
  outlined,
  contact,
  menu,
  chips,
  className,
  style,
  noHover,
  onClick,
  children,
  badge,
  href,
  iconPress,
  disabled,
  small,
  link,
  loading,
  transparent,
  filledDark,
  opacity,
  ...props
}) => {
  const Buttons = href ? linkButton : baseButton;
  return (
    <Buttons
      onClick={onClick}
      style={style}
      href={href}
      disabled={disabled}
      {...props}
      className={[
        css.button,
        fullWidth && css.button__fullWidth,
        filled && css.button__filled,
        filledLight && css.button__filledLight,
        filledRed && css.button__filledRed,
        filledDark && css.button__filledDark,
        outlined && css.button__outlined,
        round && css.button__round,
        contact && css.button__contact,
        menu && css.button__menu,
        chips && css.button__chips,
        badge && css.button__badge,
        iconPress && css.button__iconPress,
        disabled && "disabled",
        noHover && css.button__noHover,
        link && css.button__link,
        small && css.button__small,
        transparent && css.button__transparent,
        opacity && css.button__opacity,
        className,
      ].join(" ")}
    >
      {!loading && <>{children}</>}
      {loading && <LoaderBuffer small />}
    </Buttons>
  );
};

export default Button;
