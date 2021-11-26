import { Request, Response } from 'express';
import { BuscarDesaparecidoService } from '../../services/Desaparecidos/BuscarDesaparecidoService';

class BuscarDesaparecidoController {
  async handle(request: Request, response: Response) {
    const { id } = request.params;

    const buscarDesaparecidoService = new BuscarDesaparecidoService();

    const desaparecido = await buscarDesaparecidoService.execute(id);

    return response.json(desaparecido);
  }
}

export { BuscarDesaparecidoController };
