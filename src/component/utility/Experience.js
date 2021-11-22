function Experience(props){

    return(
        <div>
            <h3 className="text-xl font-medium">{props.jobTitle || "jobTitle"}</h3>
            <span className="text-l uppercase text-medium"> {props.companyName || "companyName"} </span>
            <span> | {props.startYear || "startYear / endYear"} - {props.endYear || "PRESENT"} </span>
            <div dangerouslySetInnerHTML={{ __html: props.description }}>
            </div>
        </div>
    )
}

export default Experience