import { Test, TestingModule } from '@nestjs/testing';
import { InputOutputMonitorGateway } from './input-output-monitor.gateway';

describe('InputOutputMonitorGateway', () => {
  let gateway: InputOutputMonitorGateway;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [InputOutputMonitorGateway],
    }).compile();

    gateway = module.get<InputOutputMonitorGateway>(InputOutputMonitorGateway);
  });

  it('should be defined', () => {
    expect(gateway).toBeDefined();
  });
});
