import Mainview from './component/Mainview';
import Sidebar from './component/Sidebar';


function App() {
  return (
    <div className="App flex">
      <aside className="h-screen sticky top-0  w-2/6 hidden lg:block ring-4 ring-secondAccent">
        <div className="flex flex-col text-left">
          <Sidebar></Sidebar>
          </div>
          </aside>
      <Mainview className="flex-grow"></Mainview>
    </div>
  );
}

export default App;
