import Experience from "./utility/Experience";
import { MainViewHeader } from "./utility/MainViewUtil";
import Portfolio from "./utility/Portfolio";
import SocialLinks from "./utility/SocialLinks";
import ContactForm from "./utility/ContactForm";
import RoovedPic from './../media/portfolio/RoovedDemo.png'
import KarbonCoinPic from './../media/portfolio/KarbonCoin.png'
import jrPic from './../media/portfolio/JosephRibkoff.png'
import { Skill, Skills } from "./utility/Skills";

function Mainview() {
    
    return (
        <div className="">
            <header className="lg:hidden  sticky top-0">
                {/* Mobile only */}
                <div className="text-center p-5 bg-grayAccent shadow-lg  text-secondAccent">
                    <h1 className="text-2xl"> Jean Khoury </h1>
                    <h2 className="text-xl">Computer Science student</h2>
                </div>
            </header>
            <main className="flex-grow">
                <div >
                    <MainViewHeader title="About Me">
                    <p className=" text-justify"> 2nd-year Computer science student, experienced Quality Insurance specialist in Accessibility
                        audit (WCAG) and user acceptance testing. Able to adapt and overcome technical and analytical challenges thanks to my knowledge of programming, math,
                        and business administration. Highly interested in computer science and new technologies.</p>
                    <div className="rounded-md shadow-lg my-2 py-2 mx-6 text-white lg:hidden">
                        <SocialLinks></SocialLinks>
                    </div>
                    </MainViewHeader>

                   
                    
                    <MainViewHeader title="Portfolio">
                        <div className="container grid grid-cols-1 sm:grid-col-1 md:grid-cols-2 lg:grid-cols-3 gap-6 xl:gap-8 ">
                                <Portfolio 
                                    header="Medical Assessment web app"
                                    description="Frontend development, Knowledge base, Identity, Design"
                                    ctaText="Visit Demo"
                                    src={RoovedPic}
                                    href="https://rhuh-callcenter-demo.herokuapp.com/"
                                    tags={["frontend", "identity"]}
                                    >
                                    </Portfolio>
                            <Portfolio
                                header="Karbon Coin"
                                description="Creating website, brand and material. Top finalist of hult Prize regionals"
                                ctaText="Visit Website"
                                src={KarbonCoinPic}
                                href="https://karboncoin.com/"
                                tags={["frontend", "identity", "Website"]}
                            >
                            </Portfolio>
                            <Portfolio
                                header="Joseph Ribkoff"
                                description="User Acceptance testing consultant, CMS on
                                Optimizely (Episerver) "
                                ctaText="Visit Website"
                                src={jrPic}
                                href="https://josephribkoff.com/"
                                tags={["Testing"]}

                            >
                            </Portfolio>
                            <Portfolio
                                header="short.001.lat"
                                description="URL shortner with a twist"
                                ctaText="Visit Website"
                                src=""
                                href="https://short.001.lat/"
                                tags={["Node.JS backend", "Rest API"]}

                            >
                            </Portfolio>
                            <Portfolio
                                header="Quick political Compass test"
                                description={["Simpler version of ", <a href="https://politicalcompass.org/" rel="noreferrer" target="_blank" className="font-bold underline"> political Compass</a> ," to quickly triage people for debates" ]}
                                ctaText="Visit Website"
                                src=""
                                href="https://jeankhoury.com/Quick-Political-Compass-Test/"
                            >
                            </Portfolio>
                        </div>
                    </MainViewHeader>
                    <MainViewHeader title="Experience">
                        <Experience
                            jobTitle="Lead Quality Assurance Tester"
                            companyName="Stardust CTG Group"
                            startYear="2020"
                            bullets={
                                ["Perform accessibility audits on websites and PDF following WCAG 2.0 AA standard and report on audit findings.",
                                    "Find and report problems or design defects",
                                    "Execute test cases on new software and applications",
                                    "Keep track of bugs and defects and report them to development teams.",
                                    "Assist with problem resolution and replication",
                                    "Continually engage in sprint retrospectives to strengthen the team, agile, and QA processes",
                                ]}
                            clients={[<strong>Customer references: </strong>, "Bombardier BRP, Structube, Rona.", <br></br>, <strong>Accessibility references: </strong>, "Hydro-Québec, European Parliament"]}
                        ></Experience>

                        <div className="w-44 p-3 bg-linkedin text-white rounded  text-center mt-2 transition duration-500 ease-in-out hover:bg-mainAccent ">
                            <a href="https://www.linkedin.com/in/jeank/?locale=en_US" className=""> View more on <i className="fab fa-linkedin"></i></a>
                        </div>
                    </MainViewHeader>
                    <MainViewHeader title="Skills" className="">
                        <div className="container grid grid-cols-1 sm:grid-col-1 md:grid-cols-2 lg:grid-cols-3 gap-6 xl:gap-8 ">

                            <Skills title="Web development" fa="fas fa-code">
                            <Skill head>Web Frameworks</Skill>
                            <Skill>Express.js, Django, React <i className="text-secondAccent hover:opacity-75 fab fa-react"></i></Skill>
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

export default Mainview;