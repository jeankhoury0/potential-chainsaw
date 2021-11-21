import SocialLinks from "./utility/SocialLinks";
import PhotoJean from "./../media/jean.png" 

function Sidebar() {
    return (
        <aside className="h-screen sticky top-0  w-2/6 hidden lg:block ring-4 ring-secondAccent">
            <div className="flex flex-col text-left">
                <div className="text-center bg-white rounded-md shadow-lg m-3 p-2 text-secondAccent">
                        <img src={PhotoJean} alt="" className="filter drop-shadow-lg ring-2 ring-secondAccent"></img>
                    <h1 className="text-3xl text-grayAccent font-bold uppercase mt-3"> Jean Khoury </h1>
                    <h2 className="text-xl">Computer Science student</h2>
                </div>
                <div className="bg-white rounded-md  m-3 p-5">
                    <h2 className="text-xl text-center text-grayAccent font-bold uppercase">Follow me</h2>
                    <SocialLinks ></SocialLinks>
                </div>
                <a href="#contact" className="bg-secondAccent p-6 self-center text-center  mt-1 text-l font-medium rounded text-white hover:bg-grayAccent transition-colors">
                    Let's Connect <i className="far fa-smile "></i>
                </a>
                
               

            </div>
        </aside>
    )
}

export default Sidebar;