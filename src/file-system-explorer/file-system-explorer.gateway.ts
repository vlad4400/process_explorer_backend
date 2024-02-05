import {
  WebSocketGateway,
  WebSocketServer,
  SubscribeMessage,
} from '@nestjs/websockets';
import { Server } from 'socket.io';
import { FileSystemExplorerService } from './file-system-explorer.service';

@WebSocketGateway()
export class FileSystemExplorerGateway {
  @WebSocketServer()
  server: Server;

  constructor(private fileSystemExplorerService: FileSystemExplorerService) {}

  @SubscribeMessage('requestDirectoryContents')
  async handleRequestDirectoryContents(
    client: any,
    payload: { path: string },
  ): Promise<void> {
    try {
      const directoryContents =
        await this.fileSystemExplorerService.listDirectoryContents(
          payload.path,
        );
      client.emit('directoryContentsResponse', directoryContents);
    } catch (error) {
      console.error('Error retrieving directory contents:', error.message);
      client.emit('error', {
        message: 'Failed to retrieve directory contents.',
      });
    }
  }
}
