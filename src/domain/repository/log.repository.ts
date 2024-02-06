import { LogEntity, LogSeverityLevel } from '../entities/log.entity';

// Es quien permite llamar a mis reglas de negocio
export abstract class LogRepository {
  abstract saveLog(log: LogEntity): Promise<void>;
  abstract getLogs(severityLevel: LogSeverityLevel): Promise<LogEntity[]>;
}