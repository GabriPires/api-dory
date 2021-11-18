import { EntityRepository, Repository } from 'typeorm';
import { MaisInformacoes } from '../entities/MaisInformacoes';

@EntityRepository(MaisInformacoes)
class MaisInformacoesRepository extends Repository<MaisInformacoes> {}

export { MaisInformacoesRepository };
