//import libraries
import React, { useState, useEffect, Fragment } from "react";
import { useSelector } from "react-redux";
import { Card, Box, Avatar } from "../../allComponents";

// COMPONENT
const Post = ({ props }) => {
  // Logic
  const { auth } = useSelector((state) => state.user);
  const { picture } = auth;
  return (
    <Fragment>
      <div>
        <Card border>
          <Box modal={true}>
            <Avatar s src={picture} />
            <h1>Post </h1>
            <input type="text" />
          </Box>
        </Card>
      </div>
    </Fragment>
  );
};

export default Post;
