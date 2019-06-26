const express = require('express');
const app = express();
const morgan = require('morgan');
//const bodyParser = require('body-parser');

/* process.env.PORT ||  CON ESTO VALIDAMOS EL PORT */

app.set('port', process.env.PORT || 3000);
/* soportar datos de form externos  */
app.use(express.urlencoded({extended: false}));
//app.use(bodyParser.json());
//app.use(bodyParser.urlencoded({extended: false}));
/* soportar datos  */
app.use(express.json());
app.use(morgan('dev'));
app.set('json spaces', 2);


 /* Aca vamos a configurar las rutas es base 
    del concepto REST-Api
 */
app.use(require('./route/index'));
app.use('/api/movies',require('./route/movies'));
app.use('/api/users',require('./route/user'));

app.listen(app.get('port'), () => {
    console.log(`Server Listen on Port: ${app.get('port')}`);
});