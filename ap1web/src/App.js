// import './App.css';
import Questao01 from "./components/Questao01";
import Questao02 from "./components/Questao02";
import Questao03 from "./components/Questao03";
import Questao04 from "./components/Questao04";

function App() {
  return (
    <div className="App">
      <center><h1> Prova Ap1 - Dev Web </h1></center>
      
      <hr />
      <center><h2> Questão 1 </h2></center>
      <Questao01 />

      <hr />
      <center><h2> Questão 2 </h2></center>
      <Questao02 />

      <hr />
      <center><h2> Questão 3 </h2></center>
      <Questao03 />

      <hr />
      <center><h2> Questão 4 </h2></center>
      <Questao04 />
    </div>
  );
}

export default App;
