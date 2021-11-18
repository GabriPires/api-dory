import { EntityRepository, Repository } from 'typeorm';
import { Vulneravel } from '../entities/Vulneravel';

@EntityRepository(Vulneravel)
class VulneraveisRepository extends Repository<Vulneravel> {}

export { VulneraveisRepository };
