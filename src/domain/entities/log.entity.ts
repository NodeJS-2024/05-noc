
export enum LogSeverityLevel {
  log = 'low',
  medium = 'medium',
  high = 'high',
}

export class LogEntity {

  public level: LogSeverityLevel; // Enum
  public message: string;
  public createdAt: Date;

  constructor(
    message: string, 
    level: LogSeverityLevel,
  ) {
    this.message = message;
    this.level = level;
    this.createdAt = new Date();
  }

}
