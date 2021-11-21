function Experience(props){

    var bulletPoint=null;
    if (props.bullets) {
        bulletPoint = (props.bullets).map((bullet) =>
            <li className="list-inside">{bullet}</li>
        );
    }
    

    return(
        <div>
            <h3 className="text-xl font-medium">{props.jobTitle || "jobTitle"}</h3>
            <span className="text-l uppercase text-medium"> {props.companyName || "companyName"} </span>
            <span> | {props.startYear || "startYear / endYear"} - {props.endYear || "PRESENT"} </span>
            <ul className="list-disc">
                {bulletPoint}
            </ul>
            <div>
                {props.clients}
            </div>
        </div>
    )
}

export default Experience