import { Injectable, Logger } from '@nestjs/common';
import * as si from 'systeminformation';

@Injectable()
export class NetworkActivityAnalysisService {
  private readonly logger = new Logger(NetworkActivityAnalysisService.name);

  async getNetworkConnections(): Promise<
    si.Systeminformation.NetworkConnectionsData[]
  > {
    try {
      const data = await si.networkConnections();
      return data;
    } catch (error) {
      this.logger.error(
        `Error retrieving network connections: ${error.message}`,
      );
      throw error;
    }
  }
}
