import { Test, TestingModule } from '@nestjs/testing';
import { MemoryAnalysisService } from './memory-analysis.service';

describe('MemoryAnalysisService', () => {
  let service: MemoryAnalysisService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MemoryAnalysisService],
    }).compile();

    service = module.get<MemoryAnalysisService>(MemoryAnalysisService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
