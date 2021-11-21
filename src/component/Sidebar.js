import SocialLinks from "./utility/SocialLinks";

function Sidebar() {
    return (
        <aside className="h-screen sticky top-0  w-2/6 hidden lg:block ring-4 ring-secondAccent">
            <div className="flex flex-col text-left">
                <div className="text-center bg-white rounded-md shadow-lg m-3 p-2 text-secondAccent">
                    <h1 className="text-3xl text-grayAccent font-bold uppercase"> Jean Khoury </h1>
                    <h2 className="text-xl">Computer Science student</h2>
                </div>
                <div className="bg-white rounded-md  m-3 p-5  ">
                    <h2 className="text-xl text-center text-grayAccent font-bold uppercase">Follow me</h2>
                    <SocialLinks ></SocialLinks>
                </div>
                <a href="#contact" className="bg-secondAccent w-1/2 self-center text-center py-2 mt-1 text-l font-medium rounded text-white hover:bg-grayAccent transition-colors">
                    Contact me
                </a>
                
               

            </div>
        </aside>
    )
}

export default Sidebar;