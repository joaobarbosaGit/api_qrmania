import { getConnection } from "typeorm";


import  createConnection  from '@shared/infra/typeorm';


async function create(){
    const connection = await createConnection();

    await connection.query(
        `INSERT INTO USERS ( )`
    );
}