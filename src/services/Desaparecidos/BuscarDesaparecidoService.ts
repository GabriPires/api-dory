import { getCustomRepository } from 'typeorm';
import { DesaparecidosRepository } from '../../repositories/DesaparecidosRepositories';

class BuscarDesaparecidoService {
  async execute(id: string) {
    const desaparecidosRepository = getCustomRepository(
      DesaparecidosRepository,
    );

    const desaparecido = await desaparecidosRepository.findOne({
      where: {
        codigo: id,
      },
      relations: ['pessoa'],
    });

    if (!desaparecido) {
      throw new Error('Desaparecido não encontrado');
    }

    return desaparecido;
  }
}

export { BuscarDesaparecidoService };
