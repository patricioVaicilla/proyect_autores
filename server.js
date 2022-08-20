const express = require('express');
const cors = require('cors');
const app = express();
const port = 8000;

require('./server/config/mongoose.config');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const userAuthor=require('./server/routes/author.routes');
userAuthor(app);

app.listen(port, () => console.log(`Servidor escuchando en el puerto ${port}...`))