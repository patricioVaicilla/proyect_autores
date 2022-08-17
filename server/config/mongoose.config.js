const mongoose = require('mongoose');
const db = 'author_db';

mongoose.connect(`mongodb://localhost/${db}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log(`Conexión con la base de datos ${db} exitosa!!`))
    .catch(() => console.log(`Hubo un error al intentar conectar con la base de datos :(`));