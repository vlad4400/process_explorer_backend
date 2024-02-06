import {
  WebSocketGateway,
  WebSocketServer,
  SubscribeMessage,
  OnGatewayInit,
} from '@nestjs/websockets';
import { Server } from 'socket.io';
import { InputOutputMonitorService } from './input-output-monitor.service';

@WebSocketGateway()
export class InputOutputMonitorGateway implements OnGatewayInit {
  @WebSocketServer() server: Server;

  constructor(
    private readonly inputOutputMonitorService: InputOutputMonitorService,
  ) {}

  afterInit(server: Server): void {
    console.log('InputOutputMonitor WebSocket gateway initialized');

    setInterval(async () => {
      try {
        const data = await this.inputOutputMonitorService.getDiskIOData();
        server.emit('diskIOStatsResponse', data);
      } catch (error) {
        console.error('Error retrieving disk I/O data:', error.message);
        server.emit('error', {
          message: 'Failed to retrieve disk I/O data.',
        });
      }
    }, 1000);
  }

  @SubscribeMessage('requestDiskIOData')
  async handleRequestDiskIOData(client: any): Promise<void> {
    try {
      const data = await this.inputOutputMonitorService.getDiskIOData();
      client.emit('diskIODataResponse', data);
    } catch (error) {
      client.emit('error', {
        message: 'Failed to retrieve disk I/O data.',
      });
    }
  }
}
