import { Response } from 'express';
import { BuscarDesaparecidosService } from '../../services/Desaparecidos/BuscarDesaparecidosService';

class BuscarQuantidadeEncontradosController {
  async handle(_, response: Response) {
    const buscarDesaparecidoService = new BuscarDesaparecidosService();

    const desaparecidos = await buscarDesaparecidoService.execute();

    return response.json(desaparecidos.length);
  }
}

export { BuscarQuantidadeEncontradosController };
