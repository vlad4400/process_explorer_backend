import { Injectable, Logger } from '@nestjs/common';
import * as si from 'systeminformation';

@Injectable()
export class InputOutputMonitorService {
  private readonly logger = new Logger(InputOutputMonitorService.name);

  async getDiskIOData(): Promise<si.Systeminformation.DisksIoData> {
    try {
      const data = await si.disksIO();
      return data;
    } catch (error) {
      this.logger.error(`Failed to get disk I/O data: ${error.message}`);
      throw error;
    }
  }
}
