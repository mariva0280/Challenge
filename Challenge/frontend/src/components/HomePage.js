
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
              <button> Agregar invitado </button>
            </Link>
          </li>
          <li>
            <Link to="/modify">
              <button> Modificar invitado </button>
            </Link>
          </li>
          <li>
            <Link to="/delete">
              <button> Eliminar invitado </button>
            </Link>
          </li>
          <li>
            <Link to="/list">
              <button> Lista de invitados </button>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default HomePage;
