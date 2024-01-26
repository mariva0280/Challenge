import React from 'react';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import HomePage from './components/HomePage';
import GuestList from './components/GuestList'; // Agregando el componente para listar invitados
import AddGuestForm from './components/AddGuestForm'; // Agregando el componente para agregar invitados
import ModifyGuestForm from './components/ModifyGuestForm'; // Agregando el componente para modificar invitados
import DeleteGuestForm from './components/DeleteGuestForm'; // Agregando el componente para eliminar invitados
import './styles/StylesHomePage.css';
import './styles/StylesAddGuest.css';
import './styles/StylesModifyGuest.css';
import './styles/StylesDeleteGuest.css';
import './styles/StylesListGuest.css';
const App = () => {
  return (
      <Router>
        <div className ="container">
          <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/add" element={<AddGuestForm />} />
              <Route path="/modify" element={<ModifyGuestForm />} />
              <Route path="/delete" element={<DeleteGuestForm />} />
              <Route path="/list" element={<GuestList />} />
          </Routes>
        </div>
      </Router>
  );
};

export default App;

