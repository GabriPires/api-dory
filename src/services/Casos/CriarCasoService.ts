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
  async execute(caso: ICriarCaso) {}
}

export { CriarCasoService };
