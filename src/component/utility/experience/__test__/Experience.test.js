import React from "react";
import ReactDom from "react-dom";
import Experience from "../Experience";

import {render} from '@testing-library/react';
import "@testing-library/jest-dom/extend-expect"

it("renders without crash", () =>{
    const div = document.createElement("div");
    ReactDom.render(<Experience></Experience>, div);
})

it("show the correct placeholder if no endYear is specified", () =>{
    const {getByTestId} = render(<Experience jobTitle="lore" companyName="SD" startYear="1234"></Experience>);
    expect(getByTestId("experience-date")).toHaveTextContent("1234 - PRESENT");
})

it("show the correct information if all fields are given", () => {
  const { getByTestId } = render(
    <Experience jobTitle="job title" companyName="company" startYear="2020" endYear="2021"></Experience>
  );
  expect(getByTestId("experience-company-name")).toHaveTextContent("company");
  expect(getByTestId("experience-date")).toHaveTextContent("2020 - 2021");
});
