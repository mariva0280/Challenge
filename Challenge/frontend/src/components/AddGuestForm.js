
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const AddGuestForm = () => {
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [email, setEmail] = useState('');
  const [birthDate, setBirthDate] = useState('');
  const navigate = useNavigate();

  const handleAddGuest = async () => {
    try{
        const parsedBirthDate = parseInt(birthDate,10);
        const response = await axios.post('http://localhost:8080/guests', {
            mail: email,
            name: name,
            surname: surname,
            bornDate: parsedBirthDate
        });

            setName('');
            setSurname('');
            setEmail('');
            setBirthDate('');

    }catch(error){
        console.log('Error al añadir invitado:',error);
    }

  };
  return (
      <div className="form-container">
        <h2>Añadir Invitado</h2>
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
        <button type="button" className="form-button" onClick={handleAddGuest}>
          Añadir Invitado
        </button>
        <button type="button" className="form-button" onClick={() => navigate('/')}>
               Pagina principal
        </button>
        <button type="button" className="form-button" onClick={() => navigate('/modify')}>
               Modificar invitado
        </button>

      </div>

    );
  };
export default AddGuestForm;
