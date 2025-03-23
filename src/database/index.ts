import { PrismaClient } from "@prisma/client";

let database: PrismaClient;

try{
    database = new PrismaClient();
}
catch(e){
    console.error(e);
    process.exit(1);
}


export default database;