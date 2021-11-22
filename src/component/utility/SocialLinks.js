function SocialLinksIndiv(brandLink, fontAwesome, handle){

    return(
        <div className="mt-2 text-secondAccent underline font-medium">
            <a href={brandLink} target="_blank" rel="noreferrer">
                <i className=" text-mainAccent">
                    <span className={fontAwesome}></span></i>
                    <span className="ml-2">{handle}</span>
            </a>
        </div>
    )
}

function SocialLinks(){
    return (
        <div>
            {SocialLinksIndiv("https://www.linkedin.com/in/jeank/?locale=en_US", "fab fa-linkedin", "/in/jeank")}
            {SocialLinksIndiv("https://github.com/jeankhoury0", "fab fa-github", "jeankhoury0")}
            {SocialLinksIndiv(null, "fas fa-location-arrow", "Montreal, Canada")}
            {/* <SocialLinks fontAwesome="fas fa-envelope" handle="jeankhoury0(at)gmail.com"></SocialLinks> */}

        </div>
      

            
            // <SocialLinksIndiv brandLink="https://www.linkedin.com/in/jeank/?locale=en_US" fontAwesome="fab fa-github" handle="@jeankhoury0"></SocialLinksIndiv>
            // <SocialLinksIndiv fontAwesome="fas fa-location-arrow" handle="Montreal, Canada "></SocialLinksIndiv>
    )}

export function SocialLink(props){
    return (
        <div className="mt-2 text-secondAccent underline font-medium">
            <a href={props.req.link} target="_blank" rel="noreferrer">
                <i className=" text-mainAccent">
                    <span className={props.req.fa}></span></i>
                <span className="ml-2">{props.req.title}</span>
            </a>
        </div>
    )

}

export default SocialLinks;