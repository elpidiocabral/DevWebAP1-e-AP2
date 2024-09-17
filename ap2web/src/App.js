import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import MyNavbar from "./components/mynavbar/MyNavbar.js";
import Main from "./components/CRUD/Main.js";
import Equipe from "./components/Equipe/Equipe.js";

function App() {
  return (
    <div className="App">
      <Main />
      <Equipe />
    </div>
  );
}

export default App;
