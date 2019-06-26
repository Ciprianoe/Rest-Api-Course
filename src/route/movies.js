/* const express = require('express');
const router = express.Router();
 */

/* otra forma de requerirlo */
const { Router } = require('express');
const router = new Router();
const _ = require('underscore');
const data = require('../sample.json');
//console.log(data);



 /* Aca vamos a configurar las rutas es base 
    del concepto REST-Api
 */


router.get('/', (req,res) => {

   res.json(data);
});


router.post('/', (req,res) => {
    // el obj completo es req y accedemos al body para ver lo que me trae
    //console.log(req.body);

    //1 definimos el obj
    const {title,director,year,rating}= req.body;
    //2 comprobamos
    if(title && director && year && rating){
        // generamosn el id
        const id = data.length +1;
        //3 si existe pasamos todo los params  
        const newMovie ={id,...req.body};  
        //res.json('saved');
        //console.log(newMovie);
        data.push(newMovie);
        res.json(data);
    } else {
        // res.status(500).json({error:'Wrong!!'})
        res.send('Wrong Request');
    }   
    
 });

//actualizar

router.put('/:id', (req,res) => {
    const {id} = req.params;
    const {title,director,year,rating}= req.body;

        if (title && director && year && rating) {
            _.each(data, (movie, i) => {
                if(movie.id == id) {
                    movie.title = title;
                    movie.director = director;
                    movie.year = year;
                    movie.rating = rating;                

                }
            });
            res.json(data);
        } else {
            res.status(500).json({error: 'There was an error.'});
        }

    
 });
 



 // delete

 /* router.delete('/:id', (req,res) => {
    //console.log(req.params);
    const { id } = req.params;
    _.each(data, (data, i) => {
        if (data.id == id) {
            data.remove(i,1);
        }
    });
    res.send(data);
    
 });
 */

router.delete('/:id', (req, res) => {
    const {id} = req.params;
    if (id) {
        _.each(data, (movie, i) => {
            if (movie.id == id) {
                data.splice(i, 1);
            }
        });
        res.json(data);
    }
});




module.exports = router;  