import { CheckService } from '../domain/use-cases/checks/check-service';
import { CronService } from './cron/cron-service';
import { FileSystemDataSource } from '../infrastructure/datasources/file-system.datasource';
import { LogRepositoryImpl } from '../infrastructure/repositories/log.repository.impl';

const fileSystemLogRepository = new LogRepositoryImpl(
  // new PostgreSQLDataSource()
  new FileSystemDataSource(),
);

export class Server {

  public static start() {

    console.log('Server started...');

    CronService.createJob(
      '*/5 * * * * *',
      () => {
        // const date = new Date();
        // console.log('5 seconds', date);

        const url = 'http://google.com';

        new CheckService(
          fileSystemLogRepository,
          () => console.log(`${ url } is ok`),
          (error) => console.log(error),
        ).execute(url);

      }
    );

  }

}