import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Desaparecido } from './Desaparecido';
import { Vulneravel } from './Vulneravel';

@Entity('min_mais_informacoes')
class MaisInformacoes {
  @PrimaryGeneratedColumn({ name: 'min_codigo', type: 'int' })
  codigo: number;

  @Column({ name: 'min_cabelo', type: 'longtext' })
  cabelo: string;

  @Column({ name: 'min_olhos', type: 'longtext' })
  olhos: string;

  @Column({ name: 'min_altura', type: 'decimal' })
  altura: number;

  @Column({ name: 'min_peso', type: 'decimal' })
  peso: number;

  @Column({ name: 'min_descricao', type: 'longtext' })
  descricao: string;

  @Column({ name: 'min_tipo_sanguineo', type: 'longtext' })
  tipoSanguineo: string;

  @Column({ name: 'min_deficiencia_mental', type: 'longtext' })
  deficienciaMental: string;

  @Column({ name: 'min_deficiencia_fisica', type: 'longtext' })
  deficienciaFisica: string;

  @Column({ name: 'min_restricao_alimentar', type: 'longtext' })
  restricaoAlimentar: string;

  @Column({ name: 'min_restricao_medicamentos', type: 'longtext' })
  restricaoMedicamentos: string;

  @Column({ name: 'min_doencas', type: 'longtext' })
  doencas: string;

  @OneToOne(() => Desaparecido)
  @JoinColumn({ name: 'des_codigo' })
  codigoDesaparecido: number;

  @OneToOne(() => Vulneravel)
  @JoinColumn({ name: 'vul_codigo' })
  codigoVulneravel: number;
}

export { MaisInformacoes };
