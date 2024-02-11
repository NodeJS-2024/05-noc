import { CheckService } from '../domain/use-cases/checks/check-service';
import { CronService } from './cron/cron-service';
import { FileSystemDataSource } from '../infrastructure/datasources/file-system.datasource';
import { LogRepositoryImpl } from '../infrastructure/repositories/log.repository.impl';
// import { envs } from '../config/plugins/envs.plugin';
import { EmailService } from './email/email.service';
import { SendEmailLogs } from '../domain/use-cases/email/send-email-log';

const fileSystemLogRepository = new LogRepositoryImpl(
  // new PostgreSQLDataSource()
  new FileSystemDataSource(),
);

const emailService = new EmailService();

export class Server {

  public static start() {

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
    //       fileSystemLogRepository,
    //       () => console.log(`${ url } is ok`), // o undefined
    //       (error) => console.log(error), // o undefined
    //     ).execute(url);

    //   }
    // );

  }

}