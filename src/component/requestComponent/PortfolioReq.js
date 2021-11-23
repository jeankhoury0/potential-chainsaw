import {Get} from 'react-axios'
import { PortfolioV2 } from '../utility/Portfolio'
import Preloading from '../utility/Preloading'



function PortfolioReq() {
    return (
        <div>
            <Get url="https://api-ca-central-1.graphcms.com/v2/ckw9qwyik1p7b01xqbjr30d6h/master?query=query%20AllPortofolioElemenets%20%7B%0A%20%20portfolios%20%7B%0A%20%20%20%20id%0A%20%20%20%20header%0A%20%20%20%20buttons%20%7B%0A%20%20%20%20%20%20ctaText%0A%20%20%20%20%20%20ctaurl%0A%20%20%20%20%7D%0A%20%20%20%20description%20%7B%0A%20%20%20%20%20%20html%0A%20%20%20%20%7D%0A%20%20%20%20tags%20%7B%0A%20%20%20%20%20%20title%0A%20%20%20%20%7D%0A%20%20%20%20image%20%7B%0A%20%20%20%20%20%20...%20on%20Asset%20%7B%0A%20%20%20%20%20%20%20%20webp%3A%20url(transformation%3A%20%7Bdocument%3A%20%7Boutput%3A%20%7Bformat%3A%20webp%7D%7D%7D)%0A%20%20%20%20%20%20%20%20png%3A%20url(transformation%3A%20%7Bdocument%3A%20%7Boutput%3A%20%7Bformat%3A%20png%7D%7D%7D)%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D%0A&operationName=AllPortofolioElemenets" >
                {(error, response, isLoading, makeRequest, axios) => {
                    if (error) {
                        return (<div className="bg-red-300 text-white"><button className="bg-secondAccent text-white p-2 mr-4" onClick={() => makeRequest({ params: { reload: true } })}>Refresh</button> Ops! An error occured 😞 - {error.message} </div>)
                    }
                    else if (isLoading) {
                            return (<Preloading></Preloading>)
                    }
                    else if (response !== null) {
                        const listPortfolio = response.data.data.portfolios.map((i, index)=>
                            <PortfolioV2
                                key = {index}
                                header={i.header}
                                description={i.description.html}
                                ctaText={i.buttons[0]?.ctaText}
                                src={i?.image}
                                href={i.buttons[0]?.ctaurl}
                                tags={i.tags?.map((ti =>
                                    [ti.title]))}
                            ></PortfolioV2>
                        )

                        return(
                            <div className="container grid grid-cols-1 sm:grid-col-1 md:grid-cols-2 lg:grid-cols-3 gap-6 xl:gap-8 ">
                                {listPortfolio}
                            </div>
                        )
                        
                        // return (<div>{response.data.message} <button onClick={() => makeRequest({ params: { refresh: true } })}>Refresh</button></div>)
                    }
                    return (<div>Default message before request is made.</div>)
                }}
            </Get>
        </div>
    )
}

export default PortfolioReq;