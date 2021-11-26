import { Response } from 'express';
import { BuscarDesaparecidosService } from '../../services/Desaparecidos/BuscarDesaparecidosService';

class BuscarDesaparecidosController {
  async handle(response: Response) {
    const buscarDesaparecidoService = new BuscarDesaparecidosService();

    const desaparecidos = await buscarDesaparecidoService.execute();

    console.log(desaparecidos);

    return response.send(desaparecidos);
  }
}

export { BuscarDesaparecidosController };
