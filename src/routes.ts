import { Router } from 'express';
import { CriarCasoController } from './controllers/Casos/CriarCasoController';
import { BuscarDesaparecidoController } from './controllers/Desaparecidos/BuscarDesaparecidoController';
import { BuscarDesaparecidosController } from './controllers/Desaparecidos/BuscarDesaparecidosController';

const router = Router();

const criarCasoController = new CriarCasoController();
const buscarDesaparecidosController = new BuscarDesaparecidosController();
const buscarDesaparecidoController = new BuscarDesaparecidoController();

router.get('/dory', (_, res) => {
  return res.send('Reconectando vidas');
});

router.post('/casos', criarCasoController.handle);

router.get('/desaparecidos', buscarDesaparecidosController.handle);
router.get('/desaparecido/:id', buscarDesaparecidoController.handle);

export { router };
