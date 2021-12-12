import { getCustomRepository } from 'typeorm';
import { CasosRepository } from '../../repositories/CasosRepositories';

interface ICriarCaso {
  ultimaRoupa: string;
  ultimaLocalizacao: string;
  ultimoLugar: string;
  ultimoHorario: Date;
  contatoQuemViu: string;
  emailQuemViu: string;
  nomeQuemViu: string;
  maisInfos: string;
  desaparecidoCodigo: number;
}

class CriarCasoService {
  async execute({
    contatoQuemViu,
    desaparecidoCodigo,
    emailQuemViu,
    maisInfos,
    nomeQuemViu,
    ultimaLocalizacao,
    ultimaRoupa,
    ultimoHorario,
    ultimoLugar,
  }: ICriarCaso) {
    const casosRepository = getCustomRepository(CasosRepository);

    if (!emailQuemViu.length) {
      throw new Error('Preencha seu email');
    }

    if (!nomeQuemViu.length) {
      throw new Error('Preencha seu nome');
    }

    if (!ultimaLocalizacao.length) {
      throw new Error('Preencha seu email');
    }

    if (!ultimaRoupa.length) {
      throw new Error('Preencha o campo corretamente');
    }

    if (!ultimaLocalizacao.length) {
      throw new Error('Preencha o campo corretamente');
    }

    if (!ultimoHorario) {
      throw new Error('Insira uma data válida');
    }

    const novoCaso = casosRepository.create({
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

    await casosRepository.save(novoCaso);

    return novoCaso;
  }
}

export { CriarCasoService };
