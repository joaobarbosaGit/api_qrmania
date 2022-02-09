import { container } from "tsyringe";

import "@shared/container/providers";

import { IPersonsRepository } from "@modules/persons/repositories/IPersonsReposotory";
import { PersonsRepository } from "@modules/persons/infra/repositories/PersonsRepository";

import { IPersons_LocationRepository } from "@modules/persons/repositories/IPersons_LocationRepository";
import { Persons_LocationRepository } from "@modules/persons/infra/repositories/Persons_LocationRepository";

import { IPersons_has_Persons_LocationRepository } from "@modules/persons/repositories/IPersons_has_Persons_LocationRepository";
import { Persons_has_Persons_LocationRepository } from "@modules/persons/infra/repositories/Persons_has_Persons_LocationRepository";

import { IPersons_has_EnterpriseRepository } from "@modules/persons/repositories/IPersons_has_EnterpriseRepository";
import { Persons_has_EnterpriseRepository } from "@modules/persons/infra/repositories/Persons_has_EnterpriseRepository";

import { IPersons_has_MasterRepository } from "@modules/persons/repositories/IPersons_has_MasterRepository";
import { Persons_has_MasterRepository } from "@modules/persons/infra/repositories/Persons_has_MasterRepository";

import { IEnterpriseRepository } from "@modules/entrerprise/repositories/IEntrepriseRepository";
import { EnterpriseRepository } from "@modules/entrerprise/infra/repositories/EnterpriseRepository";

import { ISales_OrderRepository } from "@modules/salesOrder/repositories/ISales_OrderRepository";
import { Sales_OrderRepository } from "@modules/salesOrder/infra/typeorm/repositories/Sales_OrderRepository";

import { ITypes_SalesRepository } from "@modules/salesOrder/repositories/ITypes_SalesRepository";
import { Types_SalesRepository } from "@modules/salesOrder/infra/typeorm/repositories/Types_SalesRepository";

import { ISales_Order_has_ProductsRepository } from "@modules/salesOrder/repositories/ISales_Order_has_ProductsRepository";
import { Sales_Order_has_ProductsRepository } from "@modules/salesOrder/infra/typeorm/repositories/Sales_Order_has_ProductsRepository";

import { IStorage_has_EnterpriseRepository } from "@modules/storage/repositories/IStorage_has_EnterpriseRepository";
import { Storage_has_EnterpriseRepository } from "@modules/storage/infra/repositories/Storage_has_EnterpriseRepository";

import { IProductsRepository } from "@modules/products/repositories/IProductsRepository";
import { ProductsRepository } from "@modules/products/infra/typeorm/repositories/ProductsRepository";

import { IProducts_has_StorageRepository } from "@modules/products/repositories/IProducts_has_StorageRepository";
import { Products_has_StorageRepository } from "@modules/products/infra/typeorm/repositories/Products_has_StorageRepository";

import { IProducts_AtributesRepository } from "@modules/products/repositories/IProducts_AtributesRepository";
import { Products_AtributesRepository } from "@modules/products/infra/typeorm/repositories/Products_AtributesRepository";

import { IProducts_has_Cost_ValueRepository } from "@modules/products/repositories/IProducts_has_Cost_ValueRepository";
import { Products_has_Cost_ValueRepository } from "@modules/products/infra/typeorm/repositories/Products_has_Cost_ValueRepository";

import { IProducts_has_Products_AtributesRepository } from "@modules/products/repositories/IProducts_has_Products_AtributesRepository";
import { Products_has_Products_AtributesRepository } from "@modules/products/infra/typeorm/repositories/Products_has_Products_AtributesRepository";

import { IProducts_has_CategoriesRepository } from "@modules/products/repositories/IProducts_has_CategoriesRepository";
import { Products_has_CategoriesRepository } from "@modules/products/infra/typeorm/repositories/Products_has_CategoriesRepository";

import { ICost_ValueRepository } from "@modules/cost_value/repositories/ICost_ValueRepository";
import { Cost_ValueRepository } from "@modules/cost_value/infra/typeorm/repositories/Cost_ValueRepository";

import { ICategoriesRepository } from "@modules/categories/repositories/ICategoriesRepository";
import { CategoriesRepository } from "@modules/categories/infra/typeorm/repositories/CategoriesRepository";

import { IPersonsTokensRepository } from "@modules/persons/repositories/IPersonsTokensRepository";
import { PersonsTokensRepository } from "@modules/persons/infra/repositories/PersonsTokensRepository";

container.registerSingleton<IPersonsRepository>(
    "PersonsRepository",
    PersonsRepository
);

container.registerSingleton<IPersons_LocationRepository>(
    "Persons_LocationRepository",
    Persons_LocationRepository
);

container.registerSingleton<IPersons_has_Persons_LocationRepository>(
    "Persons_has_Persons_LocationRepository",
    Persons_has_Persons_LocationRepository
);

container.registerSingleton<IPersons_has_EnterpriseRepository>(
    "Persons_has_EnterpriseRepository",
    Persons_has_EnterpriseRepository
);

container.registerSingleton<IPersons_has_MasterRepository>(
    "Persons_has_MasterRepository",
    Persons_has_MasterRepository
);

container.registerSingleton<IEnterpriseRepository>(
    "EnterpriseRepository",
    EnterpriseRepository
);

container.registerSingleton<ISales_OrderRepository>(
    "Sales_OrderRepository",
    Sales_OrderRepository
);

container.registerSingleton<ITypes_SalesRepository>(
    "Types_SalesRepository",
    Types_SalesRepository
);

container.registerSingleton<ISales_Order_has_ProductsRepository>(
    "Sales_Order_has_ProductsRepository",
    Sales_Order_has_ProductsRepository
);

container.registerSingleton<IStorage_has_EnterpriseRepository>(
    "Storage_has_EnterpriseRepository",
    Storage_has_EnterpriseRepository
);

container.registerSingleton<IProductsRepository>(
    "ProductsRepository",
    ProductsRepository
);

container.registerSingleton<IProducts_has_StorageRepository>(
    "Products_has_StorageRepository",
    Products_has_StorageRepository
);

container.registerSingleton<IProducts_AtributesRepository>(
    "Products_AtributesRepository",
    Products_AtributesRepository
);

container.registerSingleton<IProducts_has_Cost_ValueRepository>(
    "Products_has_Cost_ValueRepository",
    Products_has_Cost_ValueRepository
);

container.registerSingleton<IProducts_has_Products_AtributesRepository>(
    "Products_has_Products_AtributesRepository",
    Products_has_Products_AtributesRepository
);

container.registerSingleton<IProducts_has_CategoriesRepository>(
    "Products_has_CategoriesRepository",
    Products_has_CategoriesRepository
);

container.registerSingleton<ICost_ValueRepository>(
    "Cost_ValueRepository",
    Cost_ValueRepository
);

container.registerSingleton<ICategoriesRepository>(
    "CategoriesRepository",
    CategoriesRepository
);

container.registerSingleton<IPersonsTokensRepository>(
    "PersonsTokensRepository",
    PersonsTokensRepository
  );



