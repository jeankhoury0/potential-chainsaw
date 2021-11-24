import Mainview from './component/Mainview';
import Sidebar from './component/Sidebar';
import { Get } from 'react-axios'
import Preloading from './component/utility/Preloading';


function App() {
  return (
    <div className="App flex">
      <Get url= "https://api-ca-central-1.graphcms.com/v2/ckw9qwyik1p7b01xqbjr30d6h/master?query=query%20bigQuery%20%7B%0A%20%20sidebar(where%3A%20%7Bid%3A%20%22ckwazrs083cvm0d22lqlodq2k%22%7D)%20%7B%0A%20%20%20%20name%0A%20%20%20%20jobTitle%0A%20%20%20%20image%20%7B%0A%20%20%20%20%20%20...%20on%20Asset%20%7B%0A%20%20%20%20%20%20%20%20id%0A%20%20%20%20%20%20%20%20webp%3A%20url(transformation%3A%20%7Bdocument%3A%20%7Boutput%3A%20%7Bformat%3A%20webp%7D%7D%7D)%0A%20%20%20%20%20%20%20%20png%3A%20url%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%0A%20%20%7D%0A%20%20socialLinks%20%7B%0A%20%20%20%20id%0A%20%20%20%20fa%0A%20%20%20%20link%0A%20%20%20%20title%0A%20%20%7D%0A%20%20portfolios%20%7B%0A%20%20%20%20id%0A%20%20%20%20description%20%7B%0A%20%20%20%20%20%20html%0A%20%20%20%20%7D%0A%20%20%20%20header%0A%20%20%20%20image%20%7B%0A%20%20%20%20%20%20...%20on%20Asset%20%7B%0A%20%20%20%20%20%20%20%20id%0A%20%20%20%20%20%20%20%20webp%3A%20url(transformation%3A%20%7Bdocument%3A%20%7Boutput%3A%20%7Bformat%3A%20webp%7D%7D%7D)%0A%20%20%20%20%20%20%20%20png%3A%20url%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%0A%20%20%20%20buttons%20%7B%0A%20%20%20%20%20%20ctaText%0A%20%20%20%20%20%20ctaurl%0A%20%20%20%20%7D%0A%20%20%20%20tags%20%7B%0A%20%20%20%20%20%20id%0A%20%20%20%20%20%20title%0A%20%20%20%20%7D%0A%20%20%7D%0A%20%20experiences%20%7B%0A%20%20%20%20company%0A%20%20%20%20startYear%0A%20%20%20%20endYear%3A%20endDate%0A%20%20%20%20jobTitle%0A%20%20%20%20id%0A%20%20%20%20description%20%7B%0A%20%20%20%20%20%20html%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D%0A">
        {(error, response, isLoading, makeRequest, axios) => { 

        if (error) {
          return (<div className="bg-red-300 text-white"><button className="bg-secondAccent text-white p-2 mr-4" onClick={() => makeRequest({ params: { reload: true } })}>Refresh</button> Ops! An error occured 😞 - {error.message}</div>)
        }
        else if (isLoading){
          return(<Preloading></Preloading>)
        } 
        else if(response !== null){
          let data = response.data.data;
          return(
            <div className="flex">
              <aside className="h-screen sticky top-0  w-1/3 flex-col hidden lg:block bg-gradient-to-l from-secondAccent to-secondAccAccent">
                <div className=" text-left">
                  <Sidebar res={data} ></Sidebar>
                </div>
              </aside>
              <div className="flex-grow">
                <Mainview  res={data}></Mainview>
              </div>
            </div>
          )

        }
          return (<div></div>)

        }}
      </Get>
    </div>
  )
}

export default App;
