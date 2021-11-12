import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Pessoa } from './Pessoa';

@Entity('des_desaparecido')
class Desaparecido {
  @PrimaryGeneratedColumn({ name: 'des_codigo', type: 'int' })
  codigo: number;

  @Column({ name: 'des_encontrado', type: 'datetime' })
  encontrado: Date;

  @OneToOne(() => Pessoa)
  @JoinColumn({ name: 'pes_codigo' })
  codigoPessoa: number;
}

export { Desaparecido };
