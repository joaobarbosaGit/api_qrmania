import { Router } from "express"; 

import { CreatePersonsController } from "@modules/persons/useCases/Persons/createPersons/CreatePersonsController";
import { UpdatePersonsController } from "@modules/persons/useCases/Persons/updatePersons/UpdatePersonsController";
import { DeletePersonsController } from "@modules/persons/useCases/Persons/deletePersons/DeletePersonsController";
import { FindAllPersonsController } from "@modules/persons/useCases/Persons/findAllPersons/FindAllPersonsController";
import { FindOnePersonsController } from "@modules/persons/useCases/Persons/findOnePersons/FindOnePersonsController";

import { CreatePersons_LocationController } from "@modules/persons/useCases/Persons_Location/createPersons_Location/CreatePersons_LocationController";
import { UpdatePersons_LocationController } from "@modules/persons/useCases/Persons_Location/updatePersons_Location/UpdatePersons_LocationController";
import { DeletePersons_LocationController } from "@modules/persons/useCases/Persons_Location/deletePersons_Location/DeletePersons_LocationController";
import { FindOnePersons_LocationController } from "@modules/persons/useCases/Persons_Location/findPersons_Location/FindOnePersons_LocationController";

import { CreatePersons_has_Persons_LocationController } from "@modules/persons/useCases/Persons_has_Persons_Location/createPersons_has_Persons_Location/CreatePersons_has_LocationController";
import { UpdatePersons_has_Persons_LocationController } from "@modules/persons/useCases/Persons_has_Persons_Location/updatePersons_has_Persons_Location/UpdatePersons_has_Persons_LocationController";
import { DeletePersons_has_Persons_LocationController } from "@modules/persons/useCases/Persons_has_Persons_Location/deletePersons_has_Persons_Location/DeletePersons_has_Persons_LocationController";
import { FindOnePersons_has_Persons_LocationController } from "@modules/persons/useCases/Persons_has_Persons_Location/findOnePersons_has_Persons_Location/FindOnePersons_has_Persons_LocationsContoller";

import { CreatePersons_has_EnterpriseController } from "@modules/persons/useCases/Persons_Enterprise/createPersons_Enterprise/CreatePersons_EnterpriseController";
import { UpdatePersons_has_EnterpriseController } from "@modules/persons/useCases/Persons_Enterprise/updatePersons_Enterprise/UpdatePersons_EnterpriseController";
import { DeletePersons_has_EnterpriseController } from "@modules/persons/useCases/Persons_Enterprise/deletePersons_Enterprise/DeletePersons_EnterpriseController";
import { FindOnePersons_has_EnterpriseController } from "@modules/persons/useCases/Persons_Enterprise/findOnePersons_Enterprise/FindOnePersons_EnterpriseController";

import { CreatePersons_has_MasterController } from "@modules/persons/useCases/Persons_has_Master/createPersons_has_Master/CreatePersons_has_MasterController";
import { UpdatePersons_has_MasterController } from "@modules/persons/useCases/Persons_has_Master/updatePersons_has_Master/UpdatePersons_has_MasterController";
import { DeletePersons_has_MasterController } from "@modules/persons/useCases/Persons_has_Master/deletePersons_has_Master/DeletePersons_has_MasterController";
import { FindOnePersons_has_MasterController } from "@modules/persons/useCases/Persons_has_Master/findOnePersons_has_Master/FindOnePersons_has_MasterController";

const personsRoutes = Router();

const createPersonsController = new CreatePersonsController();
const updatePersonsController = new UpdatePersonsController();
const deletePersonsController = new DeletePersonsController();
const findAllPersonsController = new FindAllPersonsController();
const findOnePersonsController = new FindOnePersonsController();

const createPersons_LocationController = new CreatePersons_LocationController();
const updatePersons_LocationController = new UpdatePersons_LocationController();
const deletePersons_LocationController = new DeletePersons_LocationController();
const findOnePersons_LocationController = new FindOnePersons_LocationController();

const createPersons_has_Persons_Location = new CreatePersons_has_Persons_LocationController();
const updatePersons_has_Persons_Location = new UpdatePersons_has_Persons_LocationController();
const deletePersons_has_Persons_Location = new DeletePersons_has_Persons_LocationController();
const findOnePersons_has_Persons_Location = new FindOnePersons_has_Persons_LocationController();

const createPersons_has_Enterprise = new CreatePersons_has_EnterpriseController();
const updatePersons_has_Enterprise = new UpdatePersons_has_EnterpriseController();
const deletePersons_has_Enterprise = new DeletePersons_has_EnterpriseController();
const findOnePersons_has_Enterprise = new FindOnePersons_has_EnterpriseController();

const createPersons_has_Master = new CreatePersons_has_MasterController();
const updatePersons_has_Master = new UpdatePersons_has_MasterController();
const deletePersons_has_Master = new DeletePersons_has_MasterController();
const findOnePersons_has_Master = new FindOnePersons_has_MasterController();

personsRoutes.post("/persons", createPersonsController.handle);
personsRoutes.put("/persons", updatePersonsController.handle);
personsRoutes.delete("/persons/:id", deletePersonsController.handle);
personsRoutes.get("/persons/:id", findOnePersonsController.handle);
personsRoutes.get("/persons", findAllPersonsController.handle);

personsRoutes.post("/persons_location", createPersons_LocationController.handle);
personsRoutes.put("/persons_location", updatePersons_LocationController.handle);
personsRoutes.delete("/persons_location/:id", deletePersons_LocationController.handle);
personsRoutes.get("/persons_location/:id", findOnePersons_LocationController.handle);

personsRoutes.post("/persons_has_persons_location", createPersons_has_Persons_Location.handle);
personsRoutes.put("/persons_has_persons_location", updatePersons_has_Persons_Location.handle);
personsRoutes.delete("/persons_has_persons_location/:id", deletePersons_has_Persons_Location.handle);
personsRoutes.get("/persons_has_persons_location/:id", findOnePersons_has_Persons_Location.handle);

personsRoutes.post("/persons_has_enterprise", createPersons_has_Enterprise.handle);
personsRoutes.put("/persons_has_enterprise", updatePersons_has_Enterprise.handle);
personsRoutes.delete("/persons_has_enterprise/:id", deletePersons_has_Enterprise.handle);
personsRoutes.get("/persons_has_enterprise/:id", findOnePersons_has_Enterprise.handle);

personsRoutes.post("/persons_has_master", createPersons_has_Master.handle);
personsRoutes.put("/persons_has_master", updatePersons_has_Master.handle);
personsRoutes.delete("/persons_has_master/:id", deletePersons_has_Master.handle);
personsRoutes.get("/persons_has_master/:id", findOnePersons_has_Master.handle);

export { personsRoutes };