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

import { IQrCodeFidelidadeHistoricoRepository } from "@modules/qrCodeFidelidade/repositories/IQrCodeFidelidadeHistoricoRepository";
import { QrCodeFidelidadeHistoricoRepository } from "@modules/qrCodeFidelidade/infra/typeorm/repositories/QrCodeFidelidadeHistoricoRepository";

import { IRaspadinha_TicketRepository } from "@modules/raspadinha/repositories/IRaspadinha_TicketRepository";
import { Raspadinha_TicketRepository } from "@modules/raspadinha/infra/typeorm/repositories/Raspadinha_TicketRepository";

import { IRaspadinha_PremiosRepository } from "@modules/raspadinha/repositories/IRaspadinha_PremiosRepository";
import { Raspadinha_PremiosRepository } from "@modules/raspadinha/infra/typeorm/repositories/Raspadinha_PremiosRepository";

import { IPontuacoesPremiosRepository } from "@modules/pontuacoes/repositories/IPontuacoesPremiosRepository";
import { PontuacoesPremiosRepository } from "@modules/pontuacoes/infra/typeorm/repositories/PontuacoesPremiosRepository";

import { IPontuacoesHistoricoRepository } from "@modules/pontuacoes/repositories/IPontuacoesHistoricoRepository";
import { PontuacoesHistoricoRepository } from "@modules/pontuacoes/infra/typeorm/repositories/PontuacoesHistoricoRepository";

import { IPontuacoesResgateRepository } from "@modules/pontuacoes/repositories/IPontuacoesResgateRepository";
import { PontuacoesResgateRepository } from "@modules/pontuacoes/infra/typeorm/repositories/PontuacoesResgateRepository";

import { ILojista_DadosRepository } from "@modules/lojista/repositories/ILojista_DadosRepository";
import { Lojista_DadosRepository } from "@modules/lojista/infra/typeorm/repositories/LojistaRepository";

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

container.registerSingleton<IQrCodeFidelidadeHistoricoRepository>(
  "QrCodeFidelidadeHistoricoRepository",
  QrCodeFidelidadeHistoricoRepository
);

container.registerSingleton<IRaspadinha_TicketRepository>(
  "RaspadinhaTicketRepository",
  Raspadinha_TicketRepository
);

container.registerSingleton<IRaspadinha_PremiosRepository>(
  "RaspadinhaPremiosRepository",
  Raspadinha_PremiosRepository
);

container.registerSingleton<IPontuacoesPremiosRepository>(
  "PontuacoesPremiosRepository",
  PontuacoesPremiosRepository
);

container.registerSingleton<IPontuacoesHistoricoRepository>(
  "PontuacoesHistoricoRepository",
  PontuacoesHistoricoRepository
);

container.registerSingleton<IPontuacoesResgateRepository>(
  "PontuacoesRegatesoRepository",
  PontuacoesResgateRepository
);

container.registerSingleton<ILojista_DadosRepository>(
  "Lojista_DadosRepository",
  Lojista_DadosRepository
);
