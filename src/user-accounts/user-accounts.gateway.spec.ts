import { Test, TestingModule } from '@nestjs/testing';
import { UserAccountsGateway } from './user-accounts.gateway';

describe('UserAccountsGateway', () => {
  let gateway: UserAccountsGateway;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UserAccountsGateway],
    }).compile();

    gateway = module.get<UserAccountsGateway>(UserAccountsGateway);
  });

  it('should be defined', () => {
    expect(gateway).toBeDefined();
  });
});
