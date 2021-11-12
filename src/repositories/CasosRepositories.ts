import { EntityRepository, Repository } from 'typeorm';
import { Caso } from '../entities/Caso';

@EntityRepository(Caso)
class CasosRepository extends Repository<Caso> {}

export { CasosRepository };
