import { envs } from './config/plugins/envs.plugin';
import { LogModel, MongoDatabase } from './data/mongo-db';
import { Server } from './presentation/server';

(async() => {
  main();
})();

async function main() {

  await MongoDatabase.connect({
    mongoUrl: envs.MONGO_URL,
    dbName: envs.MONGO_DB_NAME,
  });

  // Coleccion => tablas
  // Documento => registros

  // Crear registro
  // const newLog = await LogModel.create({
  //   message: 'Test message desde Mongo',
  //   origin: 'App.ts',
  //   level: 'low'
  // });

  // await newLog.save();
  // console.log(newLog);

  // Obtener registros
  // const logs = await LogModel.find();
  // console.log(logs);


  // Server.start();
  // console.log(envs);
}
