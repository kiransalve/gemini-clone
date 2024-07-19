import "./App.css";
import Main from "./component/Main/Main";
import Sidebar from "./component/Sidebar/Sidebar";

function App() {
  return (
    <div className="app">
      <Sidebar />
      <Main />
    </div>
  );
}

export default App;
