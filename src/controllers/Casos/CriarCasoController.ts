import { Request, Response } from 'express';
import { CriarCasoService } from '../../services/Casos/CriarCasoService';

class CriarCasoController {
  async handle(request: Request, response: Response) {
    const {
      contatoQuemViu,
      desaparecidoCodigo,
      emailQuemViu,
      maisInfos,
      nomeQuemViu,
      ultimaLocalizacao,
      ultimaRoupa,
      ultimoHorario,
      ultimoLugar,
    } = request.body;

    const criarCasoService = new CriarCasoService();

    const caso = criarCasoService.execute({
      contatoQuemViu,
      desaparecidoCodigo,
      emailQuemViu,
      maisInfos,
      nomeQuemViu,
      ultimaLocalizacao,
      ultimaRoupa,
      ultimoHorario,
      ultimoLugar,
    });

    return response.json(caso);
  }
}

export { CriarCasoController };
