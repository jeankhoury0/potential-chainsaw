import Mainview from './component/Mainview';
import Sidebar from './component/Sidebar';

function App() {
  return (
    <div className="App flex">
      <Sidebar></Sidebar>
      <Mainview></Mainview>
    </div>
  );
}

export default App;
