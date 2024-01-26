// ModifyGuestForm.js
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const ModifyGuestForm = () => {
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [email, setEmail] = useState('');
  const [birthDate, setBirthDate] = useState('');
  const navigate = useNavigate();


  const handleModifyGuest = async () => {
    try {
      const parsedBirthDate = parseInt(birthDate,10);
      const response = await axios.put(`http://localhost:8080/guests/${email}` , {
        name: name,
        surname: surname,
        mail: email,
        bornDate: parsedBirthDate
      });
      console.log('Invitado modificado:', response.data);
    } catch (error) {
      console.log('Error al modificar invitado:', error);
    }
  };

  return (
    <div className="form-container">
          <h2>Modificar Invitado</h2>
          <label className="form-label">Nombre:</label>
          <input
            type="text"
            className="form-input"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <label className="form-label">Apellido:</label>
          <input
            type="text"
            className="form-input"
            value={surname}
            onChange={(e) => setSurname(e.target.value)}
          />
          <label className="form-label">Email:</label>
          <input
            type="email"
            className="form-input"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label className="form-label">Fecha de Nacimiento:</label>
          <input
            type="text"
            className="form-input"
            value={birthDate}
            onChange={(e) => setBirthDate(e.target.value)}
          />
          <button type="button" className="form-button" onClick={handleModifyGuest}>
              Modificar Invitado
          </button>
          <button type="button" className="form-button" onClick={() => navigate('/')}>
               Pagina principal
          </button>
          <button type="button" className="form-button" onClick={() => navigate('/add')}>
                Añadir invitado
          </button>
          <button type="button" className="form-button" onClick={() => navigate('/delete')}>
                Eliminar invitado
          </button>
        </div>
  );
};

export default ModifyGuestForm;
