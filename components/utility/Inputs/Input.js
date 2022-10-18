//import libraries
import { ErrorMessage, useField } from "formik";
import React, { Fragment } from "react";
import { MdClose, MdCheck } from "react-icons/md";
import { RiEyeLine, RiEyeOffLine } from "react-icons/ri";
import css from "./Input.module.css";

// COMPONENT
const Input = ({
  map,
  error,
  placeholder,
  label,
  htmlFor,
  pattern,
  success,
  showPassword,
  show,
  errorClick,
  setShow,
  ...props
}) => {
  // Logic
  const [field, meta] = useField(props);

  return (
    <Fragment>
      <div className={css.input__container}>
        <div className={css.input__wrapper}>
          <label htmlFor={htmlFor}>{label}</label>
          <input
            className={[
              css.input,
              meta.touched && meta.error && css.input__error__border,
            ].join(" ")}
            type={field.type}
            name={field.name}
            placeholder={placeholder}
            pattern={pattern}
            {...field}
            {...props}
          />
          <div className={css.input__side__div}>
            {meta.touched && meta.error && (
              <div onClick={errorClick} iconPress>
                <MdClose size={24} color="var(--error)" />
              </div>
            )}
            {success && <MdCheck color="var(--green)" size={24} />}

            {showPassword && (
              <div
                onClick={(e) => {
                  e.preventDefault();
                  setShow((prev) => !prev);
                }}
                iconPress
              >
                {!show && <RiEyeLine size={24} color={"var(--gray-50)"} />}
                {show && <RiEyeOffLine size={24} />}
              </div>
            )}
          </div>
        </div>
        {/* {error && { error }} */}
        {meta.touched && meta.error && (
          <p>
            <ErrorMessage name={field.name} />
          </p>
        )}
        {map}
      </div>
    </Fragment>
  );
};

//make this component available to the app
export default Input;
