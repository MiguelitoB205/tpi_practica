package com.example.practica_uno.service;

import com.example.practica_uno.entity.Categoria;
import com.example.practica_uno.entity.Libro;
import com.example.practica_uno.repository.CategoriaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class CategoriaService {
    @Autowired
    CategoriaRepository categoriaRepository;

    public List<Categoria> getCategorias(){
        return (List<Categoria>) categoriaRepository.findAll();
    }
    public Categoria saveCategoria(Categoria categoria){
        return categoriaRepository.save(categoria);
    }
    public Optional<Categoria> getById(Long id){
        return categoriaRepository.findById(id);
    }
    public Categoria updateById(Categoria request, Long id){
        Categoria categoria = categoriaRepository.findById(id).get();
        categoria.setNombre(request.getNombre());
        categoria.setLibros(request.getLibros());


        return categoria;
    }
    public Boolean deleteLibro(Long id){
        try{
            categoriaRepository.deleteById(id);
            return true;
        } catch (Exception e ){
            return false;
        }
    }

}

