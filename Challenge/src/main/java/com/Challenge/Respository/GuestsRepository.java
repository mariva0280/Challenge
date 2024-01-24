package com.Challenge.Respository;

import com.Challenge.Domain.Guests;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface GuestsRepository extends JpaRepository<Guests,String> {

}
