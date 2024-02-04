import { Test, TestingModule } from '@nestjs/testing';
import { MemoryAnalysisGateway } from './memory-analysis.gateway';

describe('MemoryAnalysisGateway', () => {
  let gateway: MemoryAnalysisGateway;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MemoryAnalysisGateway],
    }).compile();

    gateway = module.get<MemoryAnalysisGateway>(MemoryAnalysisGateway);
  });

  it('should be defined', () => {
    expect(gateway).toBeDefined();
  });
});
