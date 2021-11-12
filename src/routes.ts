import { Router } from 'express';
import { CriarCasoController } from './controllers/Casos/CriarCasoController';

const router = Router();

const criarCasoController = new CriarCasoController();

router.get('/dory', (req, res) => {
  return res.send('Reconectando vidas');
});

router.post('/casos', criarCasoController.handle);

export { router };
