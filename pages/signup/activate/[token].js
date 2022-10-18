//import libraries
import { useRouter } from "next/router";
import React, { useState, useEffect, Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Box, Button } from "../../../components/allComponents";
import { activateUser } from "../../../redux/actions/userActions";
import { SyncLoader } from "react-spinners";

// COMPONENT
const Activate = ({ props }) => {
  // Logic

  const router = useRouter();

  const token = router.query.token;
  const dispatch = useDispatch();
  const { auth, error, loading } = useSelector((state) => state.user);

  const { token: authToken } = auth;

  console.log("token", token);

  const handleActivate = () => {
    const token = router.query.token;
    const payload = { token };
    dispatch(activateUser(payload));
  };

  useEffect(() => {
    handleActivate();
  }, []);

  return (
    <Fragment>
      <Box centered>
        <h1>Activate </h1>
        {error}
      </Box>
      {loading && (
        <Box centered>
          <SyncLoader size={10} color="black" />
        </Box>
      )}
    </Fragment>
  );
};

export default Activate;
