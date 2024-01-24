package com.Challenge.Controller.Input;

import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.NotNull;
import lombok.Data;

import java.time.LocalDate;
@Data

public class GuestInput {
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

    public GuestInput(String mail, String name, String surname, int  bornDate) {
        this.mail = mail;
        this.name = name;
        this.surname = surname;
        this.bornDate = bornDate;
    }
}
