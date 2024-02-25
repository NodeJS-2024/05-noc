import { envs } from './envs.plugin';

describe('envs.plugins.ts', () => {

  test('should return env options', () => {
    // console.log({envs});

    expect(envs).toEqual({
      PORT: 3000,
      MAILER_SERVICE: 'gmail',
      MAILER_EMAIL: 'angelfgdeveloper@gmail.com',
      MAILER_SECRET_KEY: 'jjyvbwicaxyaluae',
      PROD: false,
      MONGO_URL: 'mongodb://angelfg:654321@localhost:27018',
      MONGO_DB_NAME: 'NOC-TEST',
      MONGO_USER: 'angelfg',
      MONGO_PASS: '654321'
    });

  });

  test('should return error if not found env', async () => {
    jest.resetModules();
    process.env.PORT = 'ABC';

    try {
      await import('./envs.plugin');
      // console.log(envs);
      expect(true).toBe(false);
    } catch (error) {
      // console.log(error);
      expect(`${ error }`).toContain('"PORT" should be a valid integer');
    }

  });


});