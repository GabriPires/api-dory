import { getCustomRepository } from 'typeorm';
import { CasosRepository } from '../../repositories/CasosRepositories';

class BuscarCasoService {
  async execute(id: string) {
    const casosRepository = getCustomRepository(CasosRepository);

    const caso = await casosRepository.find({
      where: {
        desaparecidoCodigo: id,
      },
      relations: ['desaparecido'],
    });

    if (!caso) {
      throw new Error('Caso não encontrado');
    }

    return caso;
  }
}

export { BuscarCasoService };
