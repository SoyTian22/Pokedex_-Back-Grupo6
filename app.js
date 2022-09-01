const express = require('express');
const db = require('./db/index');
const app = express();
const port = 5432;
const cors = require ("cors");
const usersRoutes = require("./routes/user");
const pokemonRoutes = require("./routes/pokemon");
const bodyParser = require("body-parser");
const PORT = process.env.PORT || 5432;




app.use (cors())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/users", usersRoutes);
app.use("/pokemon", pokemonRoutes);



app.listen(PORT, console.log(`El servidor comenzó en el puerto ${PORT} del grupo 6`));

app.listen(4000, () => {
  console.log("Servidor Prendido Grupo 6");
});