import './App.css';
import {BrowserRouter as Router, Routes,Route} from "react-router-dom"
import Footer from './components/navegacion/Footer';
import Nabvar from './components/navegacion/Nabvar';
import Inicio from './components/paginas/Inicio';
import FormularioRegistro from './components/paginas/FormularioRegistro';
import RegistroActividades from './components/paginas/RegistroActividades';
import RegistroCurso from './components/paginas/RegistroCurso';
import RegistroGrupo from './components/paginas/RegistroGrupo';
import encavesado from './assets/encavesado.png';


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/Inicio" element={<Inicio/>}/>
          <Route path="/*" element={
            <>
            <div> <img src={encavesado} className="encavesado"/> </div>

              <Nabvar/>
              <Route path="/FormularioRegistro" element={<FormularioRegistro/>}/>
              <Route path="/RegistroActividades" element={<RegistroActividades/>}/>
              <Route path="/RegistroCurso" element={<RegistroCurso/>}/>
              <Route path="/RegistroGrupo" element={<RegistroGrupo/>}/>
              <Footer/>
            </>
          }/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
