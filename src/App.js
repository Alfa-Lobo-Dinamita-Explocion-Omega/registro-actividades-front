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
import { useLocation } from 'react-router-dom';
import IngresarActividades from './components/paginas/IngresarActividades';




function Content() {
  let location = useLocation();

  return (
    <>
    {location.pathname !== "/Inicio" && <div> <img src={encavesado} className="encavesado"/> </div>}
    {location.pathname !== "/Inicio" && <Nabvar/>}
    <Routes>
      <Route path="/Inicio" element={<Inicio/>}/>
      <Route path="/FormularioRegistro" element={<FormularioRegistro/>}/>
      <Route path="/RegistroActividades" element={<RegistroActividades/>}/>
      <Route path="/RegistroCurso" element={<RegistroCurso/>}/>
      <Route path="/RegistroGrupo" element={<RegistroGrupo/>}/>
      <Route path="/IngresarActividades/:id" element={<IngresarActividades/>}/>
    </Routes>
    {location.pathname !== "/Inicio" && <Footer/>}
  </>
  );
}

function App() {
  return (
    <div className="App">
      <Router>
        <Content/>
      </Router>
    </div>
  );
}

export default App;
