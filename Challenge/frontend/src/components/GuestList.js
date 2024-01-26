import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const GuestsForm = () => {
  const [guests, setGuests] = useState([]);
  const navigate = useNavigate();

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
    <div className="list-container">
          <h2>Lista de Invitados</h2>
          <button className="form-button" onClick={handleRefresh}>
            Actualizar Lista
          </button>
          <button className="form-button" onClick={() => navigate('/')}>
             Pagina principal
          </button>
          <ul>
            {guests.map((guest) => (
              <li key={guest.mail} className="list-item">
                {guest.name} {guest.surname} - {guest.mail}
              </li>
            ))}
          </ul>
        </div>
  );
};

export default GuestsForm;

