// ModifyGuestForm.js
import React, { useState } from 'react';
import axios from 'axios';

const ModifyGuestForm = () => {
  // Mantén un estado local para los campos del formulario
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [email, setEmail] = useState('');
  const [birthDate, setBirthDate] = useState('');

  // Función para manejar la actualización de invitados
  const handleModifyGuest = async () => {
    try {
      // Realiza una solicitud PUT al backend para actualizar el invitado
      const response = await axios.put('http://localhost:8080/guests/${guestMail}', {
        name: name,
        surname: surname,
        bornDate: birthDate
      });
      console.log('Invitado modificado:', response.data);
    } catch (error) {
      console.log('Error al modificar invitado:', error);
    }
  };

  return (
    <div>
      <h2>Modificar Invitado</h2>
      <form>
        {/* Campos del formulario */}
        <input type="text" placeholder="Nombre" value={name} onChange={(e) => setName(e.target.value)} />
        <input type="text" placeholder="Apellido" value={surname} onChange={(e) => setSurname(e.target.value)} />
        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <input type="date" placeholder="Fecha de Nacimiento" value={birthDate} onChange={(e) => setBirthDate(e.target.value)} />
        {/* Botón para modificar invitado */}
        <button type="button" onClick={handleModifyGuest}>Modificar Invitado</button>
      </form>
    </div>
  );
};

export default ModifyGuestForm;
