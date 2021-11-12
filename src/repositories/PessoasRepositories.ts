import { EntityRepository, Repository } from 'typeorm';
import { Pessoa } from '../entities/Pessoa';

@EntityRepository(Pessoa)
class PessoasRepository extends Repository<Pessoa> {}

export { PessoasRepository };
