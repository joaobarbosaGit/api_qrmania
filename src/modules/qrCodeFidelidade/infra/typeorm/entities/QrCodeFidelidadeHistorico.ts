import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("qrcode_fidelidade_historico")
class QrCodeFidelidadeHistorico {
  @PrimaryGeneratedColumn()
  idqrcode_fidelidade_historico!: number;

  @Column()
  date_used!: Date;

  @Column()
  uso_identificador!: string;

  @Column()
  idusuario!: number;

  @Column()
  idqrcode_fidelidade!: number;

  @Column()
  created_at!: Date;

  @Column()
  updated_at!: Date;

  @Column()
  cpf_usuario!: string;

  @Column()
  valor_total!: number;

  @Column()
  valor_desconto!: number;
}

export { QrCodeFidelidadeHistorico };
