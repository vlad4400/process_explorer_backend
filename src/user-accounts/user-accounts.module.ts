import { Module } from '@nestjs/common';
import { UserAccountsService } from './user-accounts.service';
import { UserAccountsGateway } from './user-accounts.gateway';

@Module({
  providers: [UserAccountsService, UserAccountsGateway]
})
export class UserAccountsModule {}
