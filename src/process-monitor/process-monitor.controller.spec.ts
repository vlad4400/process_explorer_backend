import { Test, TestingModule } from '@nestjs/testing';
import { ProcessMonitorController } from './process-monitor.controller';

describe('ProcessMonitorController', () => {
  let controller: ProcessMonitorController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProcessMonitorController],
    }).compile();

    controller = module.get<ProcessMonitorController>(ProcessMonitorController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
