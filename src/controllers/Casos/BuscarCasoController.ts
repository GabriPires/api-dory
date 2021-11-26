import { Request, Response } from 'express';
import { BuscarCasoService } from '../../services/Casos/BuscarCasoService';

class BuscarCasoController {
  async handle(request: Request, response: Response) {
    const { id } = request.params;

    const buscarCasoService = new BuscarCasoService();

    const caso = await buscarCasoService.execute(id);

    return response.json(caso);
  }
}

export { BuscarCasoController };
