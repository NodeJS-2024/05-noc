import { MongoDatabase } from '../init';
import { envs } from '../../../config/plugins/envs.plugin';
import mongoose from 'mongoose';
import { LogModel } from './log.model';

describe('log.model.ts', () => {

  beforeAll(async() => {

    await MongoDatabase.connect({
      mongoUrl: envs.MONGO_URL, 
      dbName: envs.MONGO_DB_NAME,
    });

  });

  afterAll(() => {
    mongoose.connection.close();
  })
  
  test('should return LogModel', async () => {

    const logData = {
      origin: 'log.model.ts',
      message: 'Test-Message',
      level: 'low'
    }

    const log = await LogModel.create(logData);
    // console.log(log);

    expect( log ).toEqual(expect.objectContaining({
      ...logData,
      createdAt: expect.any(Date),
      id: expect.any(String)
    }));

    await LogModel.findByIdAndDelete(log.id);

  });

  test('should return the schema object', async () => {

    const schema = LogModel.schema.obj;

    // console.log(schema);

    expect(schema).toEqual(expect.objectContaining({
        message: { type: expect.any(Function), required: true },
        origin: { type: expect.any(Function) },
        level: {
          type: expect.any(Function),
          enum: [ 'low', 'medium', 'high' ],
          default: 'low'
        },
        createdAt: expect.any(Object)
    }));

  });

});