package com.onepiece.api.repository;
import com.onepiece.api.model.Personaje;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PersonajeRepository extends JpaRepository<Personaje, Long> {
}