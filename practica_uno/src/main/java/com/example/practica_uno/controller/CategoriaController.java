package com.example.practica_uno.controller;

import com.example.practica_uno.entity.Categoria;
import com.example.practica_uno.service.CategoriaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/categorias")
public class CategoriaController {
    @Autowired
    public CategoriaService categoriaService;
    @GetMapping
    public List<Categoria> getCategorias(){
        return categoriaService.getCategorias();

    }
    @PostMapping
    public Categoria saveCategoria(@RequestBody Categoria categoria){
        return this.categoriaService.saveCategoria(categoria);
    }
    @GetMapping(path="/{id}")
    public Optional<Categoria> getCategoriaById(@PathVariable("id")Long id){
        return this.categoriaService.getById(id);
    }
    @PutMapping(path = "/{id}")
    public Categoria updateById(@RequestBody Categoria request, @PathVariable("id") Long id){
        return this.categoriaService.updateById(request, id);
    }
    @DeleteMapping(path = "/{id}")
    public String deleteById(@PathVariable ("id") Long id){
        boolean ok = this.categoriaService.deleteLibro(id);

        if(ok){
            return "Categoría con id " + id + " eliminada";
        } else{
            return  "Error, por favor inténtelo de nuevo";
        }
    }
}
