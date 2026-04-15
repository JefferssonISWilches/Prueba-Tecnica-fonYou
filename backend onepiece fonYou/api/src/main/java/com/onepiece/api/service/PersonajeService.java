package com.onepiece.api.service;
import com.onepiece.api.model.Personaje;
import com.onepiece.api.repository.PersonajeRepository;
import org.springframework.stereotype.Service;
import org.springframework.data.domain.Sort;
import java.util.List;

@Service
public class PersonajeService {

    private final PersonajeRepository repository;

    public PersonajeService(PersonajeRepository repository) {
        this.repository = repository;
    }

    public List<Personaje> listar() {
        return repository.findAll();
    }

    public Personaje guardar(Personaje personaje) {
        return repository.save(personaje);
    }

    public void eliminar(Long id) {
        repository.deleteById(id);
    }

    public List<Personaje> listar(String orden) {
        if ("nombre".equalsIgnoreCase(orden)) {
            return repository.findAll(Sort.by("nombre"));
        } else if ("fecha".equalsIgnoreCase(orden)) {
            return repository.findAll(Sort.by("fechaCreacion"));
        }
        return repository.findAll();
    }

}