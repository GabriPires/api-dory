import 'reflect-metadata';
import express from 'express';

import './database';

const app = express();

app.get('/dory', (req, res) => {
  return res.send('Reconectando vidas');
});

app.listen(3000, () => console.log('Server is running'));
