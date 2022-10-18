//import libraries
import { Form, Formik } from "formik";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState, useEffect, Fragment } from "react";
import { useDispatch } from "react-redux";
import { dataRegisterForm } from "../../../../constants/formConstants";
import {
  currentDate,
  currentDay,
  currentMonth,
  currentYear,
  is14,
  less70,
  pickedDate,
} from "../../../../constants/functions";
import { registerUser } from "../../../../redux/actions/userActions";
import { restoreAfterUpdate } from "../../../../redux/slices/userSlice";
import {
  loginValidation,
  registerValidation,
} from "../../../../validation/userValidation";
import { Box, Button, Birthday, Input } from "../../../allComponents";

// COMPONENT
const RegisterForm = ({ props }) => {
  // Logic
  const dispatch = useDispatch();
  const router = useRouter();

  const [dateError, setDateError] = useState("");
  const [genderError, setGenderError] = useState("");
  const [user, setUser] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    bYear: currentYear,
    bMonth: currentMonth,
    bDay: currentDay,
    gender: "",
  });

  const {
    email,
    password,
    first_name,
    last_name,
    bDay,
    bMonth,
    bYear,
    gender,
  } = user;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  let picked = pickedDate(bYear, bMonth, bDay);

  const handleSubmit = (e) => {
    if (currentDate - picked < is14) {
      setDateError("You must be older than 14");
    } else if (currentDate - picked > less70) {
      setDateError(
        "it looks like you(ve entered the wrong info.Please make sure that you use your real date of birth."
      );
    } else if (gender === "") {
      setDateError("");
      setGenderError(
        "Please choose a gender. You can change who can see this later."
      );
    } else {
      setDateError("");
      setGenderError("");
      dispatch(registerUser(user));
      router.push("/login");
      dispatch(restoreAfterUpdate());
    }
  };

  return (
    <Fragment>
      <Box centered={true}>
        <h1>LoginPage </h1>

        <Formik
          enableReinitialize
          initialValues={{
            email,
            password,
            first_name,
            last_name,
            bDay,
            bMonth,
            bYear,
            gender,
          }}
          validationSchema={registerValidation}
          onSubmit={() => handleSubmit()}
        >
          {(formik) => (
            <Form>
              {dataRegisterForm.slice(0, 4).map((param) => (
                <>
                  <Input
                    key={param._id}
                    type={param.type}
                    name={param.name}
                    placeholder={param.placeholder}
                    onChange={handleChange}
                  />
                </>
              ))}

              <div>Date of birth</div>
              {dateError}

              <Birthday
                bYear={bYear}
                bDay={bDay}
                bMonth={bMonth}
                onChange={handleChange}
              />

              <div>Gender</div>
              {genderError}

              <Box>
                {dataRegisterForm.slice(4).map((param) => (
                  <>
                    <Input
                      htmlFor={param.id}
                      label={param.label}
                      key={param._id}
                      id={param.id}
                      type={param.type}
                      name={param.name}
                      value={param.value}
                      onChange={handleChange}
                    />
                  </>
                ))}
              </Box>

              <Button filled fullWidth type="submit">
                Register
              </Button>
            </Form>
          )}
        </Formik>

        <Link href="/login/forgot">Forgot password</Link>
        <button>Create Account</button>
        <Link href="/login/forgot">Create page for a celebrity</Link>
      </Box>
    </Fragment>
  );
};

export default RegisterForm;
