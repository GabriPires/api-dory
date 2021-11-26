import { Response } from 'express';
import { BuscarDesaparecidosService } from '../../services/Desaparecidos/BuscarDesaparecidosService';

class BuscarDesaparecidosController {
  async handle(_, response: Response) {
    const buscarDesaparecidoService = new BuscarDesaparecidosService();

    const desaparecidos = await buscarDesaparecidoService.execute();

    return response.json(desaparecidos);
  }
}

export { BuscarDesaparecidosController };
