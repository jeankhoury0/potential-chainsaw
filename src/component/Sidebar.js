import { SocialLink } from "./utility/SocialLinks";
import PhotoJean from "./../media/jean.png" 
import { Get } from 'react-axios'
import Preloading from "./utility/Preloading";

function Sidebar() {
    return (
        <div>
            {/* <Preloading></Preloading> */}
            <Get url="https://api-ca-central-1.graphcms.com/v2/ckw9qwyik1p7b01xqbjr30d6h/master?query=query%20sidebarExtractionDiffImg%20%7B%0A%20%20__typename%0A%20%20sidebar(where%3A%20%7Bid%3A%20%22ckwazrs083cvm0d22lqlodq2k%22%7D)%20%7B%0A%20%20%20%20name%0A%20%20%20%20socialLinks%20%7B%0A%20%20%20%20%20%20fa%0A%20%20%20%20%20%20link%0A%20%20%20%20%20%20title%0A%20%20%20%20%7D%0A%20%20%20%20image%20%7B%0A%20%20%20%20%20%20...%20on%20Asset%20%7B%0A%20%20%20%20%20%20%20%20webp%3A%20url(transformation%3A%20%7Bdocument%3A%20%7Boutput%3A%20%7Bformat%3A%20webp%7D%7D%7D)%0A%20%20%20%20%20%20%20%20png%3A%20url(transformation%3A%20%7Bdocument%3A%20%7Boutput%3A%20%7Bformat%3A%20png%7D%7D%7D)%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%0A%20%20%20%20jobTitle%0A%20%20%7D%0A%7D%0A" >
                {(error, response, isLoading, makeRequest, axios) => {
                    if (error) {
                        return (<div className="bg-red-300 text-white"><button className="bg-secondAccent text-white p-2 mr-4" onClick={() => makeRequest({ params: { reload: true } })}>Refresh</button> Ops! An error occured 😞 - {error.message} </div>)
                    }
                    else if (isLoading) {
                        return (<Preloading></Preloading>)
                    }
                    else if (response !== null) {
                        console.log(response.data.data.sidebar)
                        let data = response.data.data.sidebar;
                        return (
                            <div>
                                    <div className="text-center bg-white rounded-md shadow-lg m-3 p-2 text-secondAccent">
                                        <picture>
                                        <source srcset={data.image.webp} type="image/webp"></source>
                                              <img src={data.image.png} alt="" className="filter drop-shadow-lg ring-2 ring-secondAccent"></img>
                                        </picture>
                                    <h1 className="text-3xl text-grayAccent font-bold uppercase mt-3"> {data.name} </h1>
                                    <h2 className="text-xl">{data.jobTitle}</h2>
                                    </div>
                                    <div className="bg-white rounded-md  m-3 p-5">
                                        <h2 className="text-xl text-center text-grayAccent font-bold uppercase">Follow me</h2>                                    
                                        {data.socialLinks.map((sl)=>
                                            <SocialLink req={sl}> </SocialLink>
                                        )}
                                    </div>
                                    {/* <a href="#contact" className="bg-secondAccent p-6 self-center text-center  mt-1 text-l font-medium rounded text-white hover:bg-grayAccent transition-colors">
                                        Let's Connect <i className="far fa-smile "></i>
                                    </a> */}
                                </div>
                        )

                    }
                    
                    return (<Preloading></Preloading>)
                }}
                
            </Get>
        </div>
        
        )
    }


export default Sidebar;