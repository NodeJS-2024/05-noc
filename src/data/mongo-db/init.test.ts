import mongoose from 'mongoose';
import { MongoDatabase } from './init';

describe('init MongoDB', () => {

  afterAll(() => {
    mongoose.connection.close();
  });

  test('should connect to MongoDB', async () => {

    // console.log(process.env.MONGO_URL, process.env.MONGO_DB_NAME);

    const connected = await MongoDatabase.connect({
      dbName: process.env.MONGO_DB_NAME!,
      mongoUrl: process.env.MONGO_URL!, 
    });

    expect(connected).toBeTruthy();

  });

  test('should throw an error in MongoDB', async () => {

    try {
      const connected = await MongoDatabase.connect({
        dbName: process.env.MONGO_DB_NAME!,
        mongoUrl: 'mongodb://angelfg:654321@localhost_novalido:27018', 
      });

      expect(true).toBeFalsy();
      
    } catch (error) {
      
    }

  });

});