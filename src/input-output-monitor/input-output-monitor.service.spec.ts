import { Test, TestingModule } from '@nestjs/testing';
import { InputOutputMonitorService } from './input-output-monitor.service';

describe('InputOutputMonitorService', () => {
  let service: InputOutputMonitorService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [InputOutputMonitorService],
    }).compile();

    service = module.get<InputOutputMonitorService>(InputOutputMonitorService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
