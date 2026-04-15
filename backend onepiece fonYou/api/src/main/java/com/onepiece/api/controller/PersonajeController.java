package com.onepiece.api.controller;
import com.onepiece.api.model.Personaje;
import com.onepiece.api.service.PersonajeService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/personajes")
@CrossOrigin
public class PersonajeController {

    private final PersonajeService service;

    public PersonajeController(PersonajeService service) {
        this.service = service;
    }


    @PostMapping
    public Personaje crear(@RequestBody Personaje personaje) {
        return service.guardar(personaje);
    }

    @DeleteMapping("/{id}")
    public void eliminar(@PathVariable Long id) {
        service.eliminar(id);
    }

    @PutMapping("/{id}")
    public Personaje actualizar(@PathVariable Long id, @RequestBody Personaje personaje) {
        personaje.setId(id);
        return service.guardar(personaje);
    }
    @GetMapping
    public List<Personaje> listar(@RequestParam(required = false) String orden) {
        return service.listar(orden);
    }
}
