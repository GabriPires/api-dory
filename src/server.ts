import express from 'express';

const app = express();

app.get('/dory', (req, res) => {
  return res.send('Reconectando vidas');
});

app.listen(3000, () => console.log('Server is running'));
