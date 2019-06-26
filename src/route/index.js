/* const express = require('express');
const router = express.Router();
 */

/* otra forma de requerirlo */
const {Router} = require('express');
const router = Router();


 /* Aca vamos a configurar las rutas es base 
    del concepto REST-Api
 */


router.get('/', (req,res) => {
   const data = {
       "name": "CeeM",
       "website": "Undercontruction"
   };
   res.json(data);
});


module.exports = router;  