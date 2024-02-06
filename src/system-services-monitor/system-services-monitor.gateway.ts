import {
  WebSocketGateway,
  WebSocketServer,
  SubscribeMessage,
} from '@nestjs/websockets';
import { Server } from 'socket.io';
import { SystemServicesMonitorService } from './system-services-monitor.service';

@WebSocketGateway()
export class SystemServicesMonitorGateway {
  @WebSocketServer() server: Server;

  constructor(
    private readonly systemServicesMonitorService: SystemServicesMonitorService,
  ) {}

  @SubscribeMessage('requestSystemServices')
  async handleRequestSystemServices(client: any): Promise<void> {
    try {
      const services =
        await this.systemServicesMonitorService.getSystemServices();
      client.emit('systemServicesResponse', services);
    } catch (error) {
      client.emit('error', {
        message: 'Failed to retrieve system services data.',
      });
    }
  }
}
