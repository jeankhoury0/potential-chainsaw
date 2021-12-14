import React from "react"
function Experience(props) {
  return (
    <div data-testid="experience">
      <h3 className="text-xl font-medium">{props.jobTitle || "jobTitle"}</h3>
      <span
        className="text-l uppercase text-medium"
        data-testid="experience-company-name"
      >
        {" "}
        {props.companyName || "companyName"}{" "}
      </span>
      <span data-testid="experience-date">
        {" "}
        | {props.startYear || "startYear / endYear"} -{" "}
        {props.endYear || "PRESENT"}{" "}
      </span>
      <div
        data-testid="experience-description"
        dangerouslySetInnerHTML={{ __html: props.description }}
      ></div>
    </div>
  );
}

export default Experience;
