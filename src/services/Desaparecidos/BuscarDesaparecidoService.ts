import { getCustomRepository } from 'typeorm';
import { DesaparecidosRepository } from '../../repositories/DesaparecidosRepositories';
import { MaisInformacoesRepository } from '../../repositories/MaisInformacoesRepositories';

class BuscarDesaparecidoService {
  async execute(id: string) {
    const desaparecidosRepository = getCustomRepository(
      DesaparecidosRepository,
    );

    const maisInfoRepository = getCustomRepository(MaisInformacoesRepository);

    const desaparecido = await desaparecidosRepository.findOne({
      where: {
        codigo: id,
      },
      relations: ['pessoa'],
    });

    const maisInfos = await maisInfoRepository.findOne({
      where: {
        desaparecido: id,
      },
      relations: ['desaparecido'],
    });

    if (!desaparecido) {
      throw new Error('Desaparecido não encontrado');
    }

    const idade =
      new Date().getUTCFullYear() -
      desaparecido.pessoa.nascimento.getUTCFullYear();

    const desaparecidoModificado = { ...desaparecido, idade };

    return { desaparecido: desaparecidoModificado, maisInfos };
  }
}

export { BuscarDesaparecidoService };
