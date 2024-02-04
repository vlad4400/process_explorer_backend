import { Test, TestingModule } from '@nestjs/testing';
import { ProcessMonitorService } from './process-monitor.service';

describe('ProcessMonitorService', () => {
  let service: ProcessMonitorService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ProcessMonitorService],
    }).compile();

    service = module.get<ProcessMonitorService>(ProcessMonitorService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
