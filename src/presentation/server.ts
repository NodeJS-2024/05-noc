import { CheckService } from '../domain/use-cases/checks/check-service';
import { CronService } from './cron/cron-service';
import { FileSystemDataSource } from '../infrastructure/datasources/file-system.datasource';
import { LogRepositoryImpl } from '../infrastructure/repositories/log.repository.impl';
// import { envs } from '../config/plugins/envs.plugin';
import { EmailService } from './email/email.service';
import { SendEmailLogs } from '../domain/use-cases/email/send-email-log';
import { MongoLogDataSource } from '../infrastructure/datasources/mongo-log.datasource';
import { LogSeverityLevel } from '../domain/entities/log.entity';
import { PostgresLogDataSource } from '../infrastructure/datasources/postgres-log-datasource';
import { CheckServiceMultiple } from '../domain/use-cases/checks/check-service-multiple';

// const logRepository = new LogRepositoryImpl(
//   // new FileSystemDataSource(),
//   // new MongoLogDataSource(),
//   new PostgresLogDataSource()
// );


// Multiples servicios
const fsLogRepository = new LogRepositoryImpl(
  new FileSystemDataSource()
);

const mongoLogRepository = new LogRepositoryImpl(
  new MongoLogDataSource()
);

const posgresLogRepository = new LogRepositoryImpl(
  new PostgresLogDataSource()
);


const emailService = new EmailService();

export class Server {

  public static async start() {

    console.log('Server started...');

    // Mandar correo electronico
    // const emailService = new EmailService(
    //   fileSystemLogRepository
    // );

    // todo: Enviar logs a un usuario
    // emailService.sendEmail({
    //   to: 'sololuisenelmundo@gmail.com',
    //   subject: 'Logs de sistema',
    //   htmlBody: `
    //     <h3>Logs de sistema - NOC</h3>
    //     <p>Dolor velit fugiat id quis.</p>
    //     <p>Ver logs adjuntos</p>
    //   `
    // });

    // todo: Enviar logs a varios usuarios
    // emailService.sendEmailWithFileSystemLogs(
    //   [ 'pruebasuser123@gmail.com', 'dev.company201@gmail.com' ]
    // );

    // todo: enviar varios correos con use cases
    // new SendEmailLogs(
    //   emailService,
    //   fileSystemLogRepository,
    // ).execute(
    //   [ 'pruebasuser123@gmail.com', 'dev.company201@gmail.com' ]
    // );

    // CronService.createJob(
    //   '*/5 * * * * *',
    //   () => {
    //     // const date = new Date();
    //     // console.log('5 seconds', date);

    //     const url = 'http://google.com';

    //     new CheckService(
    //       logRepository,
    //       () => console.log(`${ url } is ok`), // o undefined
    //       (error) => console.log(error), // o undefined
    //     ).execute(url);

    //   }
    // );

    // Obtener los logs por severidad
    // const logs = await logRepository.getLogs(LogSeverityLevel.low);
    // console.log(logs);


    // MULTIPLES SERVICIOS DE GUARDADO
    // CronService.createJob(
    //   '*/5 * * * * *',
    //   () => {
    //     // const date = new Date();
    //     // console.log('5 seconds', date);

    //     const url = 'http://google.com';

    //     new CheckServiceMultiple(
    //       [
    //         fsLogRepository,
    //         mongoLogRepository,
    //         posgresLogRepository
    //       ],
    //       () => console.log(`${ url } is ok`), // o undefined
    //       (error) => console.log(error), // o undefined
    //     ).execute(url);

    //   }
    // );

  }

}