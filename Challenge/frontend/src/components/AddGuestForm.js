// AddGuestForm.js
import React, { useState } from 'react';
import axios from 'axios';

const AddGuestForm = () => {
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [email, setEmail] = useState('');
  const [birthDate, setBirthDate] = useState('');

  const handleAddGuest = async () => {
    try{
        const parsedBirthDate = parseInt(birthDate,10);
        const response = await axios.post('http://localhost:8080/guests', {
            mail: email,
            name: name,
            surname: surname,
            bornDate: parsedBirthDate
        });
        console.log('Invitado añadido:', response.data);
        setName('');
        setSurname('');
        setEmail('');
        setBirthDate('');
    }catch(error){
        console.log('Error al añadir invitado:',error);
    }

  };

  return (
    <div>
      <h2>Añadir Invitado</h2>
      <form>
        {/* Campos del formulario */}
        <input type="text" placeholder="Nombre" value={name} onChange={(e) => setName(e.target.value)} />
        <input type="text" placeholder="Apellido" value={surname} onChange={(e) => setSurname(e.target.value)} />
        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <input type="text" placeholder="Fecha de Nacimiento" value={birthDate} onChange={(e) => setBirthDate(e.target.value)} />
        {/* Botón para añadir invitado */}
        <button type="button" onClick={handleAddGuest}>Añadir Invitado</button>
      </form>
    </div>
  );
};

export default AddGuestForm;
