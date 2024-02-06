import { Injectable, Logger } from '@nestjs/common';
import { exec } from 'child_process';
import { promisify } from 'util';

export interface SystemService {
  name: string;
  status: string;
}

@Injectable()
export class SystemServicesMonitorService {
  private readonly logger = new Logger(SystemServicesMonitorService.name);
  private execPromise = promisify(exec);

  async getSystemServices(): Promise<SystemService[]> {
    try {
      const { stdout, stderr } = await this.execPromise(
        'systemctl --type=service --no-legend --plain --state=running',
      );
      if (stderr) {
        throw new Error(`Error retrieving system services: ${stderr}`);
      }
      return stdout
        .split('\n')
        .slice(1)
        .filter((line) => line && !line.startsWith('UNIT'))
        .map((line) => {
          const parts = line.split(/\s+/);
          const name = parts[0];
          const status = parts.slice(2, parts.length - 5).join(' ');
          return { name, status };
        })
        .filter((service) => service.name);
    } catch (error) {
      this.logger.error(`Error retrieving system services: ${error.message}`);
      throw error;
    }
  }
}
