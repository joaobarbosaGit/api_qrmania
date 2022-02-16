import { Router } from 'express';

import { usersRoutes } from './users.routes';
import { pontosRoutes } from './pontuacoes.routes';
import { cidadesRoutes } from './cidades.routes';
import { qrfidelidadeRoutes } from './qrfidelidade.routes';
import { raspadinhaRoutes } from './raspadinhas.routes';

const router = Router();

router.use("/users", usersRoutes);
router.use("/pontos", pontosRoutes);
router.use("/cidades", cidadesRoutes);
router.use("/qrfidelidade", qrfidelidadeRoutes);
router.use("/raspadinha", raspadinhaRoutes);

export { router };