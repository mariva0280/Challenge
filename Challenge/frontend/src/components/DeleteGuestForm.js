import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const DeleteGuestForm = () => {
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  const handleDeleteGuest = async () => {
    try {
      await axios.delete(`http://localhost:8080/guests/${email}`);
      setEmail('');
      //console.log('Invitado eliminado exitosamente');
    } catch (error) {
      console.log('Error al eliminar invitado:', error);
    }
  };

  return (
    <div className="form-container">
          <h2>Eliminar Invitado</h2>
          <label className="form-label">Email del Invitado:</label>
          <input
            type="email"
            className="form-input"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button type="button" className="form-button" onClick={handleDeleteGuest}>
            Eliminar invitado
          </button>
          <button type="button" className="form-button" onClick={() => navigate('/')}>
            Pagina principal
          </button>
          <button type="button" className="form-button" onClick={() => navigate('/list')}>
            Lista de invitados
          </button>
        </div>
  );
};

export default DeleteGuestForm;
