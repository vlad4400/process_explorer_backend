import {
  WebSocketGateway,
  WebSocketServer,
  SubscribeMessage,
} from '@nestjs/websockets';
import { Server } from 'socket.io';
import { UserAccountsService } from './user-accounts.service';

@WebSocketGateway()
export class UserAccountsGateway {
  @WebSocketServer() server: Server;

  constructor(private readonly userAccountsService: UserAccountsService) {}

  @SubscribeMessage('requestUserAccounts')
  async handleRequestUserAccounts(client: any): Promise<void> {
    try {
      const userAccounts = await this.userAccountsService.getUserAccounts();
      client.emit('userAccountsResponse', userAccounts);
    } catch (error) {
      client.emit('error', {
        message: 'Failed to retrieve user accounts data.',
      });
    }
  }
}
