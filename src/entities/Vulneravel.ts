import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Pessoa } from './Pessoa';

@Entity('vul_vulneravel')
class Vulneravel {
  @PrimaryGeneratedColumn({ name: 'vul_codigo', type: 'int' })
  codigo: number;

  @Column({ name: 'vul_observacoes', type: 'varchar' })
  observacoes: string;

  @Column({ name: 'vul_status', type: 'tinyint' })
  cabelo: number;

  @OneToOne(() => Pessoa)
  @JoinColumn({ name: 'pes_codigo' })
  codigoPessoa: number;
}

export { Vulneravel };
