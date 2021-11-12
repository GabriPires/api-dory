import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('pes_pessoa')
class Pessoa {
  @PrimaryGeneratedColumn({ name: 'pes_codigo', type: 'int' })
  codigo: number;

  @Column({ name: 'pes_cpf', type: 'longtext' })
  cpf: string;

  @Column({ name: 'pes_rg', type: 'longtext' })
  rg: string;

  @Column({ name: 'pes_nome', type: 'varchar', width: 100 })
  nome: string;

  @Column({ name: 'pes_nascimento', type: 'datetime' })
  nascimento: Date;

  @Column({ name: 'pes_sexo', type: 'longtext' })
  sexo: string;

  @Column({ name: 'pes_cutis', type: 'longtext' })
  cutis: string;

  @Column({ name: 'pes_tipo', type: 'longtext' })
  tipo: string;
}

export { Pessoa };
