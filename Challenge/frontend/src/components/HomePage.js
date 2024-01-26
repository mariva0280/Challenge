
import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div>
      <h1>CONTROL INVITADOS</h1>
      <nav>
        <ul>
          <li>
            <Link to="/add">
              <button>Añadir Invitados</button>
            </Link>
          </li>
          <li>
            <Link to="/modify">
              <button>Modificar Invitado</button>
            </Link>
          </li>
          <li>
            <Link to="/delete">
              <button>Eliminar Invitado</button>
            </Link>
          </li>
          <li>
            <Link to="/list">
              <button>Lista Invitados</button>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default HomePage;
