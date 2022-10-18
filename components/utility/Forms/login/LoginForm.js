//import libraries
import { Form, Formik } from "formik";
import Link from "next/link";
import React, { useState, useEffect, Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../../../../redux/actions/userActions";
import { loginValidation } from "../../../../validation/userValidation";
import { Box, Button, Input } from "../../../allComponents";
import axios from "axios";
import { useRouter } from "next/router";
import Cookies from "js-cookie";

const loginInfos = {
  email: "",
  password: "",
};
// COMPONENT
const LoginForm = ({ props }) => {
  // Logic
  const [login, setLogin] = useState(loginInfos);
  const { email, password } = login;
  const router = useRouter();

  const dispatch = useDispatch();
  const { loading, error, auth } = useSelector((state) => state.user);

  const { message, username } = auth;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLogin({ ...login, [name]: value });
  };

  const handleSubmit = () => {
    dispatch(loginUser(login));

    // router.push("/");
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
          }}
          validationSchema={loginValidation}
          onSubmit={() => handleSubmit()}
        >
          {(formik) => (
            <Form>
              <Input
                type="email"
                name="email"
                placeholder="Email address or phone number"
                onChange={handleChange}
              />
              <Input
                type="password"
                name="password"
                placeholder="Password"
                onChange={handleChange}
              />

              <Button filled fullWidth type="submit">
                Log In
              </Button>
            </Form>
          )}
        </Formik>

        {error && <h1>{error}</h1>}
        {message && <h1>{message}</h1>}
        {loading && <h1>loading...</h1>}

        <Link href="/login/forgot">Forgot password</Link>
        <button>Create Account</button>
        <Link href="/login/forgot">Create page for a celebrity</Link>
      </Box>
    </Fragment>
  );
};

export default LoginForm;
