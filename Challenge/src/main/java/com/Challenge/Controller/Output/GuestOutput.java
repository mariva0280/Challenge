package com.Challenge.Controller.Output;

import com.Challenge.Domain.Guests;
import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.NotNull;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;
@Data
@NoArgsConstructor

public class GuestOutput {
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

    public GuestOutput(String mail, String name, String surname, int bornDate) {
        this.mail = mail;
        this.name = name;
        this.surname = surname;
        this.bornDate = bornDate;
    }
    public static GuestOutput getGuests(Guests guests){
        return new GuestOutput(guests.getMail(),guests.getName(),guests.getSurname(),guests.getBornDate());
    }
}
