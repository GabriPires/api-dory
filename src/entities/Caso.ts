import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Desaparecido } from './Desaparecido';
import { Pessoa } from './Pessoa';

@Entity('cas_casos')
class Caso {
  @PrimaryGeneratedColumn({ name: 'cas_codigo', type: 'int' })
  codigo: number;

  @Column({ name: 'cas_ultima_roupa', type: 'longtext' })
  ultimaRoupa: string;

  @Column({ name: 'cas_ultima_localizacao', type: 'longtext' })
  ultimaLocalizacao: string;

  @Column({ name: 'cas_ultimo_lugar', type: 'longtext' })
  ultimoLugar: string;

  @Column({ name: 'cas_ultimo_horario', type: 'datetime' })
  ultimoHorario: Date;

  @Column({ name: 'cas_contato_quem_viu', type: 'longtext' })
  contatoQuemViu: string;

  @Column({ name: 'cas_email_quem_viu', type: 'longtext' })
  emailQuemViu: string;

  @Column({ name: 'cas_nome_quem_viu', type: 'longtext' })
  nomeQuemViu: string;

  @Column({ name: 'cas_mais_infos', type: 'longtext' })
  maisInfos: string;

  @Column({ name: 'des_codigo', type: 'int' })
  desaparecidoCodigo: number;

  @ManyToOne(() => Desaparecido)
  @JoinColumn({ name: 'des_codigo' })
  desaparecido: Desaparecido;
}

export { Caso };
