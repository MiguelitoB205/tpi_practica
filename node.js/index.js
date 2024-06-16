const express = require('express');
const app = express();
const cors = require("cors");

app.use(express.json());
const port = 3000;

const categorias = [{
    id: 1,
    nombre: 'Religión',
    libros:[
        {
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
            urlImagen:"",
            autor: "Mahoma",
            editorial: "Sociedades Colombianas Islámicas",
            year:610,
            descripcion: "Contiene leyes religiosas, sobre festividaes, como, por ejemplo, el ayuno de Ramadám, de inspiración divina, de parte del Dios Alláh, y escrito por el profeta Mahoma"
        }
    ]
},{
    id:2,
    nombre: "Filosofía",
    libros:[
        {
            id:1, 
            nombre: "Historia de la filosofía sin temor ni temblor",
            urlImagen:"",
            autor: "Fernando Savater",
            editorial: "Panamericana",
            year: 2015,
            descripcion: "Es un libro que cuenta la trayectoria de los filosofos y sus tesis sobre la cosmología del mundo, comenzando por Sócrates, Platón y Aristóteles."
        },
        {
            id: 2,
            nombre: "Capital de Marx",
            urlImagen: "",
            autor: "Karl Marx",
            editorial: "Panamericana",
            year: 2014,
            descripcion: ""
        }
    ]
}]

app.get('/', (req, res)=>{
    res.send('Node JS api');
})

app.get('/api/categorias', (req, res)=>{
    res.send(categorias);
});

app.get('/api/categorias/:id', (req, res)=>{
    const categoria = categorias.find(c=>c.id === parseInt(req.params.id));
    if(!categoria) return res.status(404).send('Categoría no encontrada');
    else res.send(categoria)
})

app.post('/api/categorias', (req, res)=>{
    const categoria = {
        id: categorias.length + 1,
        nombre: req.body.nombre,
        libros: {
            id:libros.length + 1,
            nombre: req.body.nombre,
            urlImagen: req.body.urlImagen,
            autor: req.body.autor,
            editorial: req.body.editorial,
            year:parseInt(req.body.year),
            descripcion:req.body.descripcion
        }
    }
    categorias.push(categoria);
    res.send(categoria)
});

app.delete('/api/categorias/:id', (req, res) =>{
    const categoria = categorias.find(c => c.id === parseInt(req.params.id));
    if(!categoria) return res.status(404).send("Categoría no encontrada");

    const index = categorias.indexOf(categoria);
    categorias.splice(index, 1);
    res.send(categoria)
})

app.listen(port, () => {
    console.log(`API escuchando en http://localhost:${port}`);
  });

app.use(cors())

