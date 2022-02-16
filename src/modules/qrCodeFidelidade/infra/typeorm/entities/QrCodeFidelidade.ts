import { Column, Entity, JoinColumn, JoinTable, ManyToOne,  OneToMany,  OneToOne,  PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";
import { QrCodeFidelidadeProdutos } from "./QrCodeFidelidadesProdutos";

 
@Entity("qrcode_fidelidade")
class QrCodeFidelidade {

    @PrimaryGeneratedColumn()
    idqrcode_fidelidade!: number;

    @Column()
    nome!: string;

    @Column()
    tipo!: string;

    @Column()
    status!: number;

    @Column()
    created_at!: Date;

    @Column()
    idlojista!: number;

    @Column()
    exibir_no_aplicativo!: string;

    @OneToMany(() => QrCodeFidelidadeProdutos, 
    qrcode_fidelidade_produtos => qrcode_fidelidade_produtos.qrcode_fidelidade)
    qrcode_fidelidade_produtos!: QrCodeFidelidadeProdutos[];

}

export { QrCodeFidelidade }