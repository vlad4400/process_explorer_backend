import {
  WebSocketGateway,
  WebSocketServer,
  SubscribeMessage,
} from '@nestjs/websockets';
import { Server } from 'socket.io';
import { ProcessMonitorService } from './process-monitor.service';

@WebSocketGateway()
export class ProcessMonitorGateway {
  @WebSocketServer()
  server: Server;

  constructor(private processMonitorService: ProcessMonitorService) {}

  afterInit() {
    setInterval(async () => {
      try {
        const processes = await this.processMonitorService.getAllProcesses();
        this.server.emit('processesUpdate', processes);
      } catch (error) {
        console.error('Error updating processes:', error.message);
      }
    }, 1000);
  }

  @SubscribeMessage('requestAllProcesses')
  async handleRequestAllProcesses(client: any) {
    try {
      console.log('Received requestAllProcesses');
      const processes = await this.processMonitorService.getAllProcesses();
      client.emit('allProcessesResponse', processes);
    } catch (error) {
      console.error('Error handling requestAllProcesses:', error.message);
      client.emit('error', { message: 'Failed to get all processes.' });
    }
  }

  @SubscribeMessage('requestProcessInfo')
  async handleRequestProcessInfo(client: any, payload: { pid: number }) {
    try {
      const processInfo = await this.processMonitorService.getProcessInfo(
        payload.pid,
      );
      client.emit('processInfoResponse', processInfo);
    } catch (error) {
      console.error('Error handling requestProcessInfo:', error.message);
      client.emit('error', { message: 'Failed to get process info.' });
    }
  }
}
