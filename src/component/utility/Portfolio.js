function Portfolio(props) {
    
    var tagPoints = null;
    if (props.tags) {
        tagPoints = (props.tags).map((tag) =>
            <span key={tag} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 capitalize">{tag}</span>
        );
    }

    if (!props.src){
        var noImage  = "hidden"
    } 
    if (!props.ctaText) {
        var noCTAText = "hidden"
    }

    return (
        <div class="md:p-10 flex flex-col h-full">
            <div className="max-w-sm rounded overflow-hidden shadow-lg ">
                <img src={props.src} className={`${noImage} w-full shadow-sm `} alt={props.alt || ""}></img>
                <div className ="px-6 py-4 ">
                    <div className="font-bold text-xl mb-2">{props.header}</div>
                <p className ="text-gray-700 text-base">
                        {props.description}
                </p>
                <a href={props.href} rel="noreferrer" target="_blank" className={`${noCTAText} mt-4  text-center bg-secondAccent text-white hover:bg-mainAccent transition-colors duration-200 rounded font-semibold py-2 px-4 inline-flex`}>
                    {props.ctaText}
                    </a>
                {props.children}
                </div>
                <div className ="px-6 pt-4 pb-2">
                    {tagPoints}
                </div>
            </div>
        </div>
        // <div className="portofolio z-10  min-w-full w-full  md:flex-col  self-auto">
        //     <div className=" shadow bg-gray-100 rounded-lg bg-gradient-to-br from-secondAccent to-grayAccent text-white">
        //         <div className="sm:max-w-sm sm:flex-none md:w-auto md:flex-stretch flex flex-col items-stretch relative p-6 xl:p-8 ">
        //             <h4 className="text-xl font-semibold mb-2 text-shadow"> {props.header}
        //             </h4>
        //             <p className="font-medium text-violet-100 text-shadow mb-4">{props.description}</p>
        //             <img src={props.src} className={`${noImage} rounded-xl shadow-sm ring-2 ring-secondAccent`} alt={props.alt || ""}></img>
        //             <a href={props.href} rel="noreferrer" target="_blank" className={`${noCTAText} mt-4 bg-black hover:bg-mainAccent transition-colors duration-200 rounded font-semibold py-2 px-4 inline-flex`}>
        //                 {props.ctaText}
        //             </a>
        //         </div>

        //     </div>
        // </div>
    )
}

export default Portfolio;