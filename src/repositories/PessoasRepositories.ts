import { EntityRepository, Repository } from 'typeorm';
import { Pessoa } from '../entities/Pessoa';

@EntityRepository(Pessoa)
class PessoasRepositories extends Repository<Pessoa> {}

export { PessoasRepositories };
