package com.Challenge.Service;

import com.Challenge.Controller.Input.GuestInput;
import com.Challenge.Controller.Output.GuestOutput;
import com.Challenge.Domain.Guests;
import com.Challenge.Exception.GuestDoesntExistException;
import com.Challenge.Exception.GuestExistsException;
import com.Challenge.Respository.GuestsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
@Service
public class GuestsService {
    @Autowired
    private GuestsRepository guestsRepository;

    //metodo para listar todos los invitados
    public List<GuestOutput> getAllGuests() {
        List<Guests> guests = guestsRepository.findAll();
        List<GuestOutput>guestsOutputs = new ArrayList<>();
        for(Guests item : guests) {
            guestsOutputs.add(GuestOutput.getGuests(item));
        }
        return guestsOutputs;
    }

    //metodo para añadir invitados
    public void addGuests(GuestInput guestsInput) throws GuestExistsException {
        if (guestsRepository.existsById(guestsInput.getMail())){
            throw new GuestExistsException("Guest already exists in data base");
        }
        Guests guest = Guests.getGuests(guestsInput);
        guestsRepository.save(guest);
    }

    //metodo para actualizar los datos de un invitado
    public void updateGuest(String mail,GuestInput guestsInput) throws GuestDoesntExistException{
        Guests existingGuest = guestsRepository.findById(mail).orElseThrow(()-> new GuestDoesntExistException("Guest not found"));

        existingGuest.setName(guestsInput.getName());
        existingGuest.setSurname(guestsInput.getSurname());
        existingGuest.setBornDate(guestsInput.getBornDate());

        guestsRepository.save(existingGuest);

    }

    //metodo para eliminar invitados
    public void deleteGuest(String mail) throws GuestDoesntExistException{
        if(!guestsRepository.existsById(mail)){
            throw new GuestDoesntExistException("Guest not found");
        }
        guestsRepository.deleteById(mail);

    }

}
