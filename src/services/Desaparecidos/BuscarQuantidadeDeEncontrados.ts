import { getCustomRepository, LessThan, MoreThan } from 'typeorm';
import { DesaparecidosRepository } from '../../repositories/DesaparecidosRepositories';

class BuscarQuantidadeDeEncontradosService {
  async execute() {
    const desaparecidosRepository = getCustomRepository(
      DesaparecidosRepository,
    );

    const desaparecidos = await desaparecidosRepository.find({
      where: {
        encontrado: MoreThan(new Date('0001-01-01 00:00:00')),
      },
      relations: ['pessoa'],
    });

    if (!desaparecidos) {
      throw new Error('Nenhum desaparecido encontrado');
    }

    return desaparecidos.length;
  }
}

export { BuscarQuantidadeDeEncontradosService };
