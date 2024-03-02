import { LogEntity } from '../../entities/log.entity';
import { CheckService } from './check-service';

describe('CheckService useCase', () => {

  const mockRespository = {
    saveLog: jest.fn(),
    getLogs: jest.fn(),
  }

  const successCallback = jest.fn();
  const errorCallback = jest.fn();

  const checkService = new CheckService(
    mockRespository,
    successCallback,
    errorCallback,
  );

  beforeEach(() => jest.clearAllMocks());

  test('should call successCallback when fetch returns true', async () => {

    const wasOk = await checkService.execute('https://google.com');
    
    expect( wasOk ).toBeTruthy();
    expect( successCallback ).toHaveBeenCalled();
    expect( errorCallback ).not.toHaveBeenCalled();
    expect( mockRespository.saveLog ).toBeCalledWith(
      expect.any(LogEntity )
    );
  });

  test('should call errorCallback when fetch returns false', async () => {

    const wasOk = await checkService.execute('https://dsfdsfsdfsf.com');
    
    expect( wasOk ).toBeFalsy();
    expect( successCallback ).not.toHaveBeenCalled();
    expect( errorCallback ).toHaveBeenCalled();
    expect( mockRespository.saveLog ).toBeCalledWith(
      expect.any(LogEntity )
    );
  });
  
  test('should second', async () => {

  });
  
  test('should third', async () => {

  });
  
});