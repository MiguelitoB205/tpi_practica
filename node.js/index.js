const express = require('express');
const app = express();
const cors = require("cors");

app.use(express.json());
const port = 3100;

app.use(cors())
const libros = [{
    
            id:1,
            nombre: "Sagrada Biblia",
            urlImagen: "https://panamericana.vtexassets.com/arquivos/ids/359290/biblia-latinoamericana-edic-pastoral-9788428510455.jpg?v=637336459177330000",
            autor: "Moisés, Jeremías, David, Isaías, Mateo",
            editorial: "San Pablo",
            year: 1990,
            descripcion: "Es un libro que cuenta la creación del mundo, el suceso del diluvio, como Dios elige a Abraham para ser testigo de su Amor Divino, y también contiene las enseñanzas de Jesús el Hijo de Dios por medio de sus parábolas, y cuenta el momento de su Pasión, muerte y Resurrección."
        },
        {
            id: 2,
            nombre: "El Corán",
            urlImagen:"https://www.plutonediciones.com/site/wp-content/uploads/2020/09/Cubierta-El-Coran.jpg",
            autor: "Mahoma",
            editorial: "Sociedades Colombianas Islámicas",
            year:610,
            descripcion: "Contiene leyes religiosas, sobre festividaes, como, por ejemplo, el ayuno de Ramadám, de inspiración divina, de parte del Dios Alláh, y escrito por el profeta Mahoma"
        }
    
,
        {
            id:3, 
            nombre: "Historia de la filosofía sin temor ni temblor",
            urlImagen:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNg9P4SNMUdRay2tGZJBYCAn2WxOIwPFv7AQ&s",
            autor: "Fernando Savater",
            editorial: "Panamericana",
            year: 2015,
            descripcion: "Es un libro que cuenta la trayectoria de los filosofos y sus tesis sobre la cosmología del mundo, comenzando por Sócrates, Platón y Aristóteles."
        },
        {
            id: 4,
            nombre: "Capital de Marx",
            urlImagen: "https://images.cdn2.buscalibre.com/fit-in/360x360/aa/33/aa33b0b3bb46cea52656c1e5cc55ca11.jpg",
            autor: "Karl Marx",
            editorial: "Panamericana",
            year: 2014,
            descripcion: "Karl es pionero del movimineto socialista, en que, en un territorio deben vivir con igualdad, que el rico no sea rico, ni que el pobre sea pobre, sino que vivan todos en la clase media"
        }
    
]

app.get('/', (req, res)=>{
    res.send('Node JS api');
})

app.get('/api/libros', (req, res)=>{
    res.send(libros);
});

app.get('/api/libros/:id', (req, res)=>{
    const libro = libros.find(c=>c.id === parseInt(req.params.id));
    if(!libro) return res.status(404).send('Libro no encontrado');
    else res.send(libro)
})

app.post('/api/libros', (req, res)=>{
    const  libro= {
            id:libros.length + 1,
            nombre: req.body.nombre,
            urlImagen: req.body.urlImagen,
            autor: req.body.autor,
            editorial: req.body.editorial,
            year:parseInt(req.body.year),
            descripcion:req.body.descripcion
        }
        libros.push(libro)
        res.send(libro)
    }
);

app.delete('/api/libro/:id', (req, res) =>{
    const libro= libros.find(c => c.id === parseInt(req.params.id));
    if(!libro) return res.status(404).send("Libro no encontrada");

    const index = libros.indexOf(libro);
    libros.splice(index, 1);
    res.send(libro)
})




app.listen(port, () =>{
    console.log(`Escuhando al puerto http://localhost:${port}`);
})
