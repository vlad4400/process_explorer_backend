import {
  WebSocketGateway,
  WebSocketServer,
  SubscribeMessage,
  OnGatewayInit,
} from '@nestjs/websockets';
import { Server } from 'socket.io';
import { MemoryAnalysisService } from './memory-analysis.service';

@WebSocketGateway()
export class MemoryAnalysisGateway implements OnGatewayInit {
  @WebSocketServer()
  server: Server;

  constructor(private memoryAnalysisService: MemoryAnalysisService) {}

  afterInit(server: Server) {
    console.log('MemoryAnalysis WebSocket gateway initialized');

    setInterval(async () => {
      const memoryUsage = await this.memoryAnalysisService.getMemoryUsage();
      server.emit('memoryUsageUpdate', memoryUsage);
    }, 1000);
  }

  @SubscribeMessage('requestMemoryUsage')
  async handleRequestMemoryUsage(client: any): Promise<void> {
    try {
      const memoryUsage = await this.memoryAnalysisService.getMemoryUsage();
      client.emit('memoryUsageResponse', memoryUsage);
    } catch (error) {
      console.error('Error retrieving memory usage:', error.message);
      client.emit('error', { message: 'Failed to retrieve memory usage.' });
    }
  }
}
