import React from 'react';
import GuestList from './components/GuestList'; // Agregando el componente para listar invitados
import AddGuestForm from './components/AddGuestForm'; // Agregando el componente para agregar invitados
import ModifyGuestForm from './components/ModifyGuestForm'; // Agregando el componente para modificar invitados
import DeleteGuestForm from './components/DeleteGuestForm'; // Agregando el componente para eliminar invitados

const App = () => {
  return (
    <div>
      <h1>CONTROL INVITADOS</h1>
      <AddGuestForm />
      <ModifyGuestForm />
      <DeleteGuestForm/>
      <GuestList />
    </div>
  );
};

export default App;

