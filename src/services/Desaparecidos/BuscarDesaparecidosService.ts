import { getCustomRepository, LessThan } from 'typeorm';
import { DesaparecidosRepository } from '../../repositories/DesaparecidosRepositories';

class BuscarDesaparecidosService {
  async execute() {
    const desaparecidosRepository = getCustomRepository(
      DesaparecidosRepository,
    );

    const desaparecidos = await desaparecidosRepository.find({
      where: {
        encontrado: LessThan(new Date('0001-01-01 00:00:00')),
      },
      relations: ['pessoa'],
    });

    if (!desaparecidos) {
      throw new Error('Nenhum desaparecido encontrado');
    }

    return desaparecidos;
  }
}

export { BuscarDesaparecidosService };
