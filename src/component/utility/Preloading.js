function Preloading(){
    const loadingPage = (<div className="z-10 h-screen sticky w-screen bg-gray-50">
        <div className="text-center text-4xl font-bold opacity-30 text-secondAccent">
            Loading...
        </div>
    </div>)

    return(
        <div>
            {loadingPage}
        </div>
        
    )
}

export default Preloading;