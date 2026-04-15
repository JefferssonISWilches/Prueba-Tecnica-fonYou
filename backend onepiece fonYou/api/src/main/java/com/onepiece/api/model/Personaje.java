package com.onepiece.api.model;
import jakarta.persistence.*;
import lombok.Data;
import java.time.LocalDateTime;

@Entity
@Data
public class Personaje {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String nombre;
    private String identificacion;
    private String imagen;
    private String rol;
    private String descripcion;

    private LocalDateTime fechaCreacion;
}
