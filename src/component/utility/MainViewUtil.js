export function MainViewUtil(){
    return(
        <div></div>
    )
}

export function MainViewHeader(props) {
    return (
        <div className="m-4 ">
            <h2 className=" rounded py-2 px-2 text-3xl text-grayAccent font-bold uppercase ">
                {props.title}
                <hr className="border-2 bg-secondAccent border-secondAccent mb-2"></hr>
            </h2>
            <div className="m-3 ml-7">
                {props.children}
            </div>
        </div>
            )
}

