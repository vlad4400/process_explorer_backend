import {
  WebSocketGateway,
  WebSocketServer,
  SubscribeMessage,
  OnGatewayInit,
} from '@nestjs/websockets';
import { Server } from 'socket.io';
import { NetworkActivityAnalysisService } from './network-activity-analysis.service';

@WebSocketGateway()
export class NetworkActivityAnalysisGateway implements OnGatewayInit {
  @WebSocketServer() server: Server;

  constructor(
    private readonly networkActivityAnalysisService: NetworkActivityAnalysisService,
  ) {}

  afterInit(server: Server): void {
    console.log('NetworkActivityAnalysis WebSocket gateway initialized');

    setInterval(async () => {
      try {
        const networkConnections =
          await this.networkActivityAnalysisService.getNetworkConnections();
        server.emit('networkActivityResponse', networkConnections);
      } catch (error) {
        console.error('Error retrieving network activity data:', error.message);
        server.emit('error', {
          message: 'Failed to retrieve network activity data.',
        });
      }
    }, 1000);
  }

  @SubscribeMessage('requestNetworkActivity')
  async handleRequestNetworkActivity(client: any): Promise<void> {
    try {
      const networkConnections =
        await this.networkActivityAnalysisService.getNetworkConnections();
      client.emit('networkActivityResponse', networkConnections);
    } catch (error) {
      client.emit('error', {
        message: 'Failed to retrieve network activity data.',
      });
    }
  }
}
