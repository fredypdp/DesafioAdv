// import { Icon } from '@iconify/react';
import Categorias from "./components/Categorias";
import Brand from "./components/Brand";
import { BrowserRouter as Router, Route, Routes, Navigate, Link } from "react-router-dom";

export default function App() {
  return (
    <Router>
      <main>
        <ul>
          <li><Link to="/categorias">Categorias</Link></li>
          <li><Link to="/">Brand</Link></li>
        </ul>
        <Routes>
          <Route path="/" element={ <Brand /> }/>
          <Route path="/categorias" exact element={ <Categorias /> }/>
          <Route path="*" element={ <Navigate to="/" replace/> }/>
        </Routes>
      </main>
    </Router>
  )
}
