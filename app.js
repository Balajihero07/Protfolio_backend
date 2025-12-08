const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();

const contactRouter = require('./Src/Routes/index.routes');
const adminRouter = require('./Src/Routes/admin');
const db = require('./Src/Db_connection/Database');

const app = express();
app.use(cors());
app.use(bodyParser.json());

// health
app.get('/', (req, res) => res.send('Portfolio backend running'));

// routes
app.use('/api/contact', contactRouter);
app.use('/api/admin', adminRouter);

// start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, async () => {
  console.log('Server running on port', PORT);
  try {
    const now = await db.query('SELECT NOW()');
    console.log('Postgres connected:', now.rows[0]);
  } catch (err) {
    console.error('Postgres connection error on startup', err);
  }
});
