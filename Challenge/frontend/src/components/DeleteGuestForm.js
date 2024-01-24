import React, { useState } from 'react';
import axios from 'axios';

const DeleteGuestForm = () => {
  const [email, setEmail] = useState('');

  const handleDeleteGuest = async () => {
    try {
      await axios.delete(`http://localhost:8080/guests/${email}`);
      console.log('Invitado eliminado exitosamente');
      // Puedes agregar lógica adicional después de eliminar el invitado, si es necesario
    } catch (error) {
      console.log('Error al eliminar invitado:', error);
    }
  };

  return (
    <div>
      <h2>Eliminar Invitado</h2>
      <form>
        {/* Campo del formulario para ingresar el correo electrónico del invitado a eliminar */}
        <input
          type="email"
          placeholder="Email del Invitado a Eliminar"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {/* Botón para eliminar invitado */}
        <button type="button" onClick={handleDeleteGuest}>
          Eliminar Invitado
        </button>
      </form>
    </div>
  );
};

export default DeleteGuestForm;
