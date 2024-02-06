import { LogEntity, LogSeverityLevel } from '../entities/log.entity';

// Reglas de negocios
export abstract class LogDataSource {
  abstract saveLog(log: LogEntity): Promise<void>;
  abstract getLogs(severityLevel: LogSeverityLevel): Promise<LogEntity>;
}
