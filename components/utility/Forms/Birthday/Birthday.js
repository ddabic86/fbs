//import libraries
import React, { useState, useEffect, Fragment } from "react";
import { getDays, months, years } from "../../../../constants/functions";

// COMPONENT
const Birthday = ({ bYear, bDay, onChange, bMonth }) => {
  // Logic

  const days = Array.from(
    new Array(getDays(bYear, bMonth)),
    (val, index) => 1 + index
  );

  return (
    <Fragment>
      <select name="bDay" value={bDay} onChange={onChange}>
        {days.map((day, i) => (
          <option value={day} key={i}>
            {day}
          </option>
        ))}
      </select>
      <select name="bMonth" value={bMonth} onChange={onChange}>
        {months.map((month, i) => (
          <option value={month} key={i}>
            {month}
          </option>
        ))}
      </select>
      <select name="bYear" value={bYear} onChange={onChange}>
        {years.map((year, i) => (
          <option value={year} key={i}>
            {year}
          </option>
        ))}
      </select>
    </Fragment>
  );
};

export default Birthday;
