import { container } from "tsyringe";

//import "@shared/container/providers/";

import { IUsersRepository } from "@modules/users/repositories/IUsersRepository";
import { UsersRepository } from "@modules/users/infra/typeorm/repositories/UsersRepository";

import { IPontuacoesRepository } from "@modules/pontuacoes/repositories/IPontuacoesRepository";
import { PontuacoesRepository } from "@modules/pontuacoes/infra/typeorm/repositories/PontuacoesRepository";

container.registerSingleton<IUsersRepository>(
    "UsersRepository",
    UsersRepository
);

container.registerSingleton<IPontuacoesRepository>(
    "PontuacoesRepository",
    PontuacoesRepository
);



