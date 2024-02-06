import { Test, TestingModule } from '@nestjs/testing';
import { SystemServicesMonitorService } from './system-services-monitor.service';

describe('SystemServicesMonitorService', () => {
  let service: SystemServicesMonitorService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SystemServicesMonitorService],
    }).compile();

    service = module.get<SystemServicesMonitorService>(SystemServicesMonitorService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
