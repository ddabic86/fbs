//import libraries
import React, { useState, useEffect, Fragment } from "react";

// COMPONENT
const Select = ({ name, value, children, onChange }) => {
  // Logic

  return (
    <Fragment>
      <Select name={name} value={value} onChange={onChange}>
        {children}
      </Select>
    </Fragment>
  );
};

export default Select;
