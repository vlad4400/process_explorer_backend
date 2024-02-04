import { Test, TestingModule } from '@nestjs/testing';
import { ProcessMonitorGateway } from './process-monitor.gateway';

describe('ProcessMonitorGateway', () => {
  let gateway: ProcessMonitorGateway;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ProcessMonitorGateway],
    }).compile();

    gateway = module.get<ProcessMonitorGateway>(ProcessMonitorGateway);
  });

  it('should be defined', () => {
    expect(gateway).toBeDefined();
  });
});
