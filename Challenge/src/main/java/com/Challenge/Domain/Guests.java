package com.Challenge.Domain;

import com.Challenge.Controller.Input.GuestInput;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.NotNull;
import lombok.Data;
import lombok.NoArgsConstructor;
@Entity
@Data
@NoArgsConstructor

public class Guests {
    @Id
    @NotNull(message = "Mail cannot be null")
    @NotEmpty(message = "Mail cannot be empty")
    private String mail;
    @NotNull(message = "Name cannot be null")
    @NotEmpty(message = "Name cannot be empty")
    private String name;
    @NotNull(message = "Surname cannot be null")
    @NotEmpty(message = "Surname cannot be empty")
    private String surname;

    private int bornDate;

    public Guests(String mail, String name, String surname, int  bornDate) {
        this.mail = mail;
        this.name = name;
        this.surname = surname;
        this.bornDate = bornDate;
    }
    public static Guests getGuests(GuestInput guestsInput){
        return new Guests(guestsInput.getMail(),guestsInput.getName(),guestsInput.getSurname(),guestsInput.getBornDate());
    }
}
