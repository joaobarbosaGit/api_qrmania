import { Router } from 'express';

import { personsRoutes } from './persons.routes';
import { authenticateRoutes } from "./authenticate.routes";
import { passwordRoutes } from "./password.routes";

const router = Router();

router.use("/", personsRoutes);
router.use("/password", passwordRoutes);
router.use(personsRoutes);
router.use(authenticateRoutes);

export { router };