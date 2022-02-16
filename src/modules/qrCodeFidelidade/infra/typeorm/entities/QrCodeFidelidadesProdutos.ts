import { Column, Entity, JoinColumn, ManyToOne,  OneToOne,  PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";
import { QrCodeFidelidade } from "./QrCodeFidelidade";

 
@Entity("qrcode_fidelidade_produtos")
class QrCodeFidelidadeProdutos {

    @PrimaryGeneratedColumn()
    idqrcode_fidelidade_produtos!: number;

    @Column()
    idqrcode_fidelidade!: number;

    @ManyToOne(() => QrCodeFidelidade, qrcode_fidelidade => qrcode_fidelidade.qrcode_fidelidade_produtos) // specify inverse side as a second parameter
    @JoinColumn({ name: "idqrcode_fidelidade" })
    qrcode_fidelidade!: QrCodeFidelidade;

    @Column()
    idlojista_produtos!: number;

    @Column()
    tipo_desconto!: string;

    @Column()
    desconto!: number;

    @Column()
    valor!: number;

}

export { QrCodeFidelidadeProdutos }