
export enum LogSeverityLevel {
  low = 'low',
  medium = 'medium',
  high = 'high',
}

export interface LogEntityOptions {
  level: LogSeverityLevel; // Enum
  message: string;
  origin: string;
  createdAt?: Date;
}

export class LogEntity {

  public level: LogSeverityLevel; // Enum
  public message: string;
  public createdAt: Date;
  public origin: string;

  constructor(options: LogEntityOptions) {
    const { message, level, origin, createdAt = new Date() } = options;

    this.message = message;
    this.level = level;
    this.createdAt = createdAt;
    this.origin = origin;
  }

  static fromJson = (json: string): LogEntity => {
    const { message, level, createdAt, origin } = JSON.parse(json);
    // if (!message) throw new Error('Message is required');

    const log = new LogEntity({
      message, 
      level,
      createdAt,
      // origin: 'log.entity.ts'
      origin,
    });
    // log.createdAt = new Date(createdAt);

    return log;
  }

}
