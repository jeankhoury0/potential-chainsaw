import "./Education.css";
import Experience from "./experience/Experience";

function Education(props) {
  return (
    <div className="flex items-center">
      <div>
        <Experience {...props}></Experience>
      </div>
    </div>
  );
}

export default Education;
