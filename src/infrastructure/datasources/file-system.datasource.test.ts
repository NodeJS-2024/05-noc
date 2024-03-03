import fs from 'fs';
import path from 'path';
import { FileSystemDataSource } from './file-system.datasource';

describe('Pruebas en FileSystemaDataSource.ts', () => {

  const logPath = path.join(__dirname, '../../../logs');
  // console.log(__dirname);
  // console.log({ logPath });

  beforeEach(() => {
    fs.rmSync(logPath, { recursive: true, force: true });
  });

  test('should create log files if the do not exists', async () => {

    new FileSystemDataSource();
    const  files = fs.readdirSync(logPath);

    // console.log(files);
    expect(files).toEqual([ 'logs-all.log', 'logs-high.log', 'logs-medium.log' ]);
    
  });

  test('should first', async () => {

  });
  
});