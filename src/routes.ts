import { Router } from 'express';
import { BuscarCasoController } from './controllers/Casos/BuscarCasoController';
import { CriarCasoController } from './controllers/Casos/CriarCasoController';
import { BuscarDesaparecidoController } from './controllers/Desaparecidos/BuscarDesaparecidoController';
import { BuscarDesaparecidosController } from './controllers/Desaparecidos/BuscarDesaparecidosController';
import { BuscarQuantidadeEncontradosController } from './controllers/Desaparecidos/BuscarQuantidadeDeEncontradosController';

const router = Router();

const criarCasoController = new CriarCasoController();
const buscarCasoController = new BuscarCasoController();
const buscarDesaparecidosController = new BuscarDesaparecidosController();
const buscarDesaparecidoController = new BuscarDesaparecidoController();
const buscarQuantidadeEncontradosController =
  new BuscarQuantidadeEncontradosController();

router.get('/dory', (_, res) => {
  return res.send('Reconectando vidas');
});

router.post('/casos', criarCasoController.handle);
router.get('/caso/:id', buscarCasoController.handle);

router.get('/encontrados', buscarQuantidadeEncontradosController.handle);
router.get('/desaparecidos', buscarDesaparecidosController.handle);
router.get('/desaparecido/:id', buscarDesaparecidoController.handle);

export { router };
