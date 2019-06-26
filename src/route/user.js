const { Router } = require('express');
const router = new Router();
const fetch = require('node-fetch');

/* para hacer una peticion podemos utilizar y vamos a 
    usar el modulo de node fetch
*/

router.get('/', async (req,res) =>{
  const response = await fetch('http://jsonplaceholder.typicode.com/users');
  const users = await response.json();
  //console.log(users);
    res.json(users);
});



module.exports = router;  









