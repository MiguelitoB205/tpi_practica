package com.example.practica_uno.entity;

import jakarta.persistence.*;
import jdk.jfr.DataAmount;
import lombok.Data;
import lombok.ToString;
import org.hibernate.Hibernate;

import java.util.Objects;


@Data
@Entity
@Table(name="libros")
@ToString
public class Libro {
    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    private Long id;
    @Column(unique = true)
    private String nombre;
    @Column(unique=true)
    private String urlImagen;
    @Column
    private String autor;
    @Column
    private String edtorial;
    private Integer year;
    private String descripcion;

    public Libro() {
    }

    public Libro(String nombre, String urlImagen, String autor, String edtorial, Integer year, String descripcion, Long id) {
        this.nombre = nombre;
        this.urlImagen = urlImagen;
        this.autor = autor;
        this.edtorial = edtorial;
        this.year = year;
        this.descripcion = descripcion;
        this.id = id;
    }

    public Libro(String nombre, String urlImagen, String autor, String edtorial,  Integer year, String descripcion) {
        this.nombre = nombre;
        this.urlImagen = urlImagen;
        this.autor = autor;
        this.edtorial = edtorial;

        this.year = year;
        this.descripcion = descripcion;
    }

    public Libro(Long id, String nombre, String urlImagen, String autor, String edtorial, Categoria categoria, Integer year, String descripcion) {
        this.id = id;
        this.nombre = nombre;
        this.urlImagen = urlImagen;
        this.autor = autor;
        this.edtorial = edtorial;
        this.year = year;
        this.descripcion = descripcion;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public String getUrlImagen() {
        return urlImagen;
    }

    public void setUrlImagen(String urlImagen) {
        this.urlImagen = urlImagen;
    }

    public String getAutor() {
        return autor;
    }

    public void setAutor(String autor) {
        this.autor = autor;
    }

    public String getEdtorial() {
        return edtorial;
    }

    public void setEdtorial(String edtorial) {
        this.edtorial = edtorial;
    }



    public Integer getYear() {
        return year;
    }

    public void setYear(Integer year) {
        this.year = year;
    }

    public String getDescripcion() {
        return descripcion;
    }

    public void setDescripcion(String descripcion) {
        this.descripcion = descripcion;
    }
    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || Hibernate.getClass(this) != Hibernate.getClass(o)) return false;
        Libro that = (Libro) o;
        return id != null && Objects.equals(id, that.id);
    }

    @Override
    public int hashCode() {
        return getClass().hashCode();
    }
}
