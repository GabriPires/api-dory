import { EntityRepository, Repository } from 'typeorm';
import { Desaparecido } from '../entities/Desaparecido';

@EntityRepository(Desaparecido)
class DesaparecidosRepository extends Repository<Desaparecido> {}

export { DesaparecidosRepository };
