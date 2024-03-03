import { LogEntity, LogSeverityLevel } from '../../domain/entities/log.entity';
import { LogRepositoryImpl } from './log.repository.impl';

describe('Pruebas LogRespository.ts', () => {

  const mockLogDataSource = {
    getLogs: jest.fn(),
    saveLog: jest.fn(),
  }

  const logRepository = new LogRepositoryImpl(mockLogDataSource);

  beforeEach(() => {
    jest.clearAllMocks();
  })

  test('saveLog should call the dataSource with arguments', async () => {

    const log = { level: LogSeverityLevel.high, message: 'test message' } as LogEntity;
    await logRepository.saveLog(log);

    expect(mockLogDataSource.saveLog).toHaveBeenCalledWith(log);

  });

  test('getLogs should call the dataSource with arguments', async () => {

    const lowSeverity = LogSeverityLevel.low;

    await logRepository.getLogs(lowSeverity);

    expect(mockLogDataSource.getLogs).toHaveBeenCalledWith(lowSeverity);
    
  });
  
});