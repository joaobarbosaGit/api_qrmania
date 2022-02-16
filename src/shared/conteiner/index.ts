import { container } from "tsyringe";

//import "@shared/container/providers/";

import { IUsersRepository } from "@modules/users/repositories/IUsersRepository";
import { UsersRepository } from "@modules/users/infra/typeorm/repositories/UsersRepository";

import { IPontuacoesRepository } from "@modules/pontuacoes/repositories/IPontuacoesRepository";
import { PontuacoesRepository } from "@modules/pontuacoes/infra/typeorm/repositories/PontuacoesRepository";

import { ICidadesRepository } from "@modules/cities/repositories/ICidadesRepository";
import { CidadesRepository } from "@modules/cities/infra/typeorm/repositories/CidadesRepository";

import { IQrCodeFidelidadeRepository } from "@modules/qrCodeFidelidade/repositories/IQrCodeFidelidadeRepository";
import { QrCodeFidelidadeRepository } from "@modules/qrCodeFidelidade/infra/typeorm/repositories/QrCodeFidelidadeRepository";

import { IRaspadinha_TicketRepository } from "@modules/raspadinha/repositories/IRaspadinha_TicketRepository";
import { Raspadinha_TicketRepository } from "@modules/raspadinha/infra/typeorm/repositories/Raspadinha_TicketRepository";

import { IRaspadinha_PremiosRepository } from "@modules/raspadinha/repositories/IRaspadinha_PremiosRepository";
import { Raspadinha_PremiosRepository } from "@modules/raspadinha/infra/typeorm/repositories/Raspadinha_PremiosRepository";

container.registerSingleton<IUsersRepository>(
    "UsersRepository",
    UsersRepository
);

container.registerSingleton<IPontuacoesRepository>(
    "PontuacoesRepository",
    PontuacoesRepository
);

container.registerSingleton<ICidadesRepository>(
    "CidadesRepository",
    CidadesRepository
);

container.registerSingleton<IQrCodeFidelidadeRepository>(
    "QrCodeFidelidadeRepository",
    QrCodeFidelidadeRepository
);

container.registerSingleton<IRaspadinha_TicketRepository>(
    "RaspadinhaTicketRepository",
    Raspadinha_TicketRepository
);

container.registerSingleton<IRaspadinha_PremiosRepository>(
    "RaspadinhaPremiosRepository",
    Raspadinha_PremiosRepository
);



