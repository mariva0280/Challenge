package com.Challenge.Controller;
import com.Challenge.Controller.Input.GuestInput;
import com.Challenge.Controller.Output.GuestOutput;
import com.Challenge.Exception.GuestDoesntExistException;
import com.Challenge.Exception.GuestExistsException;
import com.Challenge.Service.GuestsService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@RestController

public class GuestController {
    @Autowired
    private GuestsService guestsService;

    //@ApiOperation(value = "Adding new guest")
    @PostMapping("/guests")
    public ResponseEntity<String> addGuests(
            @Valid @RequestBody GuestInput guestsInput){
        try {
            guestsService.addGuests(guestsInput);
            return ResponseEntity.status(HttpStatus.CREATED).body("Guest added successfully");
        }catch (GuestExistsException e){
            return ResponseEntity.status(HttpStatus.CONFLICT).body(e.getMessage());
        }
    }
    //@ApiOperation(value = "Get all guests")
    @GetMapping("/guests")
    public ResponseEntity<List<GuestOutput>>getAllGuests() {
        List<GuestOutput>guests = guestsService.getAllGuests();
        return ResponseEntity.ok(guests);
    }

    //@ApiOperation(value = "Update guest")
    @PutMapping("/guests/{mail}")
    public ResponseEntity<String>updateGuest(@PathVariable String mail, @Valid @RequestBody GuestInput guestsInput){
        try {
            guestsService.updateGuest(mail,guestsInput);
            return ResponseEntity.ok("Guest updated successfully");
        }catch (GuestDoesntExistException e){
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(e.getMessage());
        }

    }

   // @ApiOperation(value = "Delete guest")
    @DeleteMapping("/guests/{mail}")
    public ResponseEntity<String>deleteGuest(@PathVariable String mail){
        try {
            guestsService.deleteGuest(mail);
            return ResponseEntity.ok("Guest deleted successfully");
        }catch (GuestDoesntExistException e){
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(e.getMessage());
        }
    }

}
