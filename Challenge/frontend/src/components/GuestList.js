import React, { useState, useEffect } from 'react';
import axios from 'axios';

const GuestsForm = () => {
  const [guests, setGuests] = useState([]);

  const handleRefresh = async () => {
    try {
      const response = await axios.get('http://localhost:8080/guests');
      setGuests(response.data);
    } catch (error) {
      console.log('Error al obtener la lista de invitados:', error);
    }
  };

  useEffect(() => {
    const fetchGuests = async () => {
      try {
        const response = await axios.get('http://localhost:8080/guests');
        setGuests(response.data);
      } catch (error) {
        console.log('Error al obtener la lista de invitados:', error);
      }
    };

    fetchGuests();
  }, []);

  return (
    <div>
      <h2>Lista de Invitados</h2>
      <button onClick={handleRefresh}>Actualizar Lista</button>
      <ul>
        {guests.map((guest) => (
          <li key={guest.mail}>
            {guest.name} {guest.surname} - {guest.mail}  - {guest.bornDate}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GuestsForm;

