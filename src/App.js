import './App.css'
import Header from "./components/Header"
import Intro from "./components/Intro"
import Trending from "./components/Trending"
import Dracin from "./components/Dracin"
import Drakor from "./components/Drakor"
import Turki from "./components/Turki"
import "./style/page.css"

function App() {
  return (
    <div>
    
      <div className="myBG">
    <Header />
    <Intro />
    </div>


    <div className="trending">
      <Trending />
    </div>

    <div className="dracin">
    <Dracin />
    </div>

    <div className="drakor">
    <Drakor />
    </div>

    <div className="turki">
    <Turki />
    </div>
<div>
  </div>
</div>

  );
}

export default App
