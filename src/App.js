import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Dashboard from "./components/layout/Dashboard";
import Container from './components/layout/Container';

import Financeiro from './components/pages/Financeiro';
import Home from './components/pages/Home';
import Pedidos from './components/pages/Pedidos';
import Produtos from './components/pages/Produtos';
import Clientes from './components/pages/Clientes';
import Usuarios from './components/pages/Usuarios';
import Footer from './components/layout/Footer';


function App() {
  return (
      <Router>
        <Container customClass="min-height" >
        <Dashboard/>
        <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/pedidos" element={<Pedidos/>}></Route>
            <Route path="/produtos" element={<Produtos/>}></Route>
            <Route path="/clientes" element={<Clientes/>}></Route>
            <Route path="/financeiro" element={<Financeiro/>}></Route>
            <Route path="/usuarios" element={<Usuarios/>}></Route>
        </Routes>
        </Container>
        <Footer/>
      </Router>
      
  );
}

export default App;
