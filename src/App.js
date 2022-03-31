/** @format */

import "./App.css";
import TopBar from "./components/topBar/TopBar";
import SideBar from "./components/sidebar/SideBar";

function App() {
  return (
    <div className="App">
      <div className="backgroundOne">
        <div className="backgroundTwo">
          <TopBar />
          <SideBar />
          <p className="heading">I design to create the best user experiance</p>
          <button>take a tour</button>
        </div>
      </div>
    </div>
  );
}

export default App;
