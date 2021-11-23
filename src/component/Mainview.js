import Experience from "./utility/Experience";
import { MainViewHeader } from "./utility/MainViewUtil";
import ContactForm from "./utility/ContactForm";
import { LanguageSkill, Skill, Skills } from "./utility/Skills";
import PortfolioReq from "./requestComponent/PortfolioReq";
import { Get } from 'react-axios'
import Preloading from "./utility/Preloading";


function Mainview() {
    return(
        <div className="flex-grow">
            < Get url= "https://api-ca-central-1.graphcms.com/v2/ckw9qwyik1p7b01xqbjr30d6h/master/?operationName=HomeExtraction&query=query%20HomeExtraction%20%7B%0A%20%20sidebar(where%3A%20%7Bid%3A%20%22ckwazrs083cvm0d22lqlodq2k%22%7D)%20%7B%0A%20%20%20%20name%0A%20%20%20%20jobTitle%0A%20%20%7D%0A%20%20experiences%20%7B%0A%20%20%20%20id%0A%20%20%20%20startDate%3A%20startYear%0A%20%20%20%20endDate%0A%20%20%20%20company%0A%20%20%20%20description%20%7B%0A%20%20%20%20%20%20html%0A%20%20%20%20%7D%0A%20%20%20%20jobTitle%0A%20%20%7D%0A%7D%0A" >
            {(error, response, isLoading, makeRequest, axios) => {
        if (error) {
            return (<div className="bg-red-300 text-white"><button className="bg-secondAccent text-white p-2 mr-4" onClick={() => makeRequest({ params: { reload: true } })}>Refresh</button> Ops! An error occured 😞 - {error.message} </div>)
        }
        else if (isLoading) {
            return (<Preloading></Preloading>)
        }
        else if (response !== null) {
            console.log(response.data.data)
            let data = response.data.data;
            return (
  
                <div>
                    <header className="lg:hidden  sticky top-0">
                        {/* Mobile only */}
                        <div className="text-center p-5 bg-grayAccent shadow-lg  text-secondAccent">
                            <h1 className="text-2xl"> {data.sidebar.name} </h1>
                            <h2 className="text-xl">{data.sidebar.jobTitle}</h2>
                        </div>
                    </header>
                    <main className="flex-grow">
                        <div >
                            <MainViewHeader title="About Me">
                                <p className=" text-justify"> 2nd-year Computer science student, experienced Quality Insurance specialist in Accessibility
                                    audit (WCAG) and user acceptance testing. Able to adapt and overcome technical and analytical challenges thanks to my knowledge of programming, math,
                                    and business administration. Highly interested in computer science and new technologies.</p>
                            </MainViewHeader>

                            <MainViewHeader title="Portfolio">
                                <PortfolioReq></PortfolioReq>
                            </MainViewHeader>
                            <MainViewHeader title="Experience">
                                {data.experiences.map((xp)=>
                                    <Experience 
                                        key={xp}
                                        jobTitle={xp.jobTitle}
                                        companyName={xp.company}
                                        startYear={xp.startDate}
                                        description={xp.description.html}
                                        
                                    ></Experience>
                                )}
                                

                                <div className="w-44 p-3 bg-linkedin text-white rounded  text-center mt-2 transition duration-500 ease-in-out hover:bg-mainAccent ">
                                    <a href="https://www.linkedin.com/in/jeank/?locale=en_US" className=""> View more on <i className="fab fa-linkedin"></i></a>
                                </div>
                            </MainViewHeader>
                            <MainViewHeader title="Skills" className="">
                                <div className="container grid grid-cols-1 sm:grid-col-1 md:grid-cols-2 lg:grid-cols-3 gap-6 xl:gap-8 ">

                                    <Skills title="Web development" fa="fas fa-code">
                                        <Skill head>Web Frameworks</Skill>
                                        <Skill>Express.js, Django, React <i className="text-secondAccent hover:text-white fab fa-react"></i></Skill>
                                        <Skill head>Templating languages</Skill>
                                        <Skill>EJS</Skill>
                                        <Skill head>Testing framework</Skill>
                                        <Skill>J-unit, Selenium</Skill>
                                        <Skill head>CMS</Skill>
                                        <Skill >Wordpress, Optimizely(Episerver), Sitecore</Skill>
                                    </Skills>

                                    <Skills title="Industry Knowledge" fa="fas fa-user-secret">
                                        <Skill head>Tools</Skill>
                                        <Skill>Jira, Azure Devops </Skill>
                                        <Skill head>Graphic Design</Skill>
                                        <Skill>Adobe Illustrator & Photoshop, Figma</Skill>
                                        <Skill head>Process</Skill>
                                        <Skill>Agile, Dev Ops, User Acceptance testing, Accessibility Audit (Web and PDF)</Skill>
                                    </Skills>
                                    <Skills title="Languages" fa="fas fa-language" className="container grid grid-cols-2">
                                        <LanguageSkill fa="fab fa-js"></LanguageSkill>
                                        <LanguageSkill fa="fab fa-java"></LanguageSkill>
                                        <LanguageSkill fa="fab fa-python"></LanguageSkill>
                                        <LanguageSkill fa="fa fa-code-branch"></LanguageSkill>
                                    </Skills>

                                </div>
                            </MainViewHeader>
                            <MainViewHeader title="Education">
                                <Experience
                                    jobTitle="Bachelor (B. Sc.) Computer science"
                                    companyName="Université de Montréal"
                                    startYear="2020"
                                    endYear="2023"
                                ></Experience>
                            </MainViewHeader>
                            <MainViewHeader title="contact me" idName="contact">
                                <ContactForm></ContactForm>
                            </MainViewHeader>
                        </div>
                    </main>
                </div>
            )

        }

        return (<Preloading></Preloading>)
    }
}
                
            </Get >
        </div > )
}

export default Mainview;