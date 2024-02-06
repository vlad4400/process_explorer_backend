import { Test, TestingModule } from '@nestjs/testing';
import { SystemServicesMonitorGateway } from './system-services-monitor.gateway';

describe('SystemServicesMonitorGateway', () => {
  let gateway: SystemServicesMonitorGateway;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SystemServicesMonitorGateway],
    }).compile();

    gateway = module.get<SystemServicesMonitorGateway>(SystemServicesMonitorGateway);
  });

  it('should be defined', () => {
    expect(gateway).toBeDefined();
  });
});
