const express = require('express');
const db = require('./config/connection');
const routes = require('./routes');
const cors = require('cors');
const cookieParser = require('cookie-parser');

const PORT = 3001;
const app = express();

app.use(cors({
  origin: ['http://localhost:3000'],
  method: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true
}));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());
app.use(routes);

db.once('open', () => {
  app.listen(PORT, () => {
    console.log(`API server running on port ${PORT}!`);
  });
});