
export function Skills(props){
    return(
        <div class="md:p-10 h-full flex flex-wrap">
            <div className="max-w-sm rounded overflow-hidden shadow-lg text-center">
                <i className={`text-secondAccent text-3xl ${props.fa}`}></i>
                <div className ="px-6 py-4">
                <div className ="font-bold text-xl mb-2">{props.title}</div>
                <p className ="text-gray-700 text-base">
                    {props.description}
                </p>
                </div>
                <div className ="px-6 pt-2 pb-2">
                    {props.children}
                </div>
            </div>
        </div>
    )
}

export function Skill(props){
    var headClass = null
    if (props.head){
        headClass = "text-secondAccent font-medium text-l my-2"
    } 
    return (
        <div>
            <div className={`${headClass} text-center`}>{props.children}</div>
            <div className="text-center "></div>
        </div>
    )
}
