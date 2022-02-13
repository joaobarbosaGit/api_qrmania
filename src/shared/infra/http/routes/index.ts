import { Router } from 'express';

import { usersRoutes } from './users.routes';
import { pontosRoutes } from './pontuacoes.routes';

const router = Router();

router.use("/users", usersRoutes);
router.use("/pontos", pontosRoutes);

export { router };