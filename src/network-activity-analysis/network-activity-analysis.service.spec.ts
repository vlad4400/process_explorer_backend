import { Test, TestingModule } from '@nestjs/testing';
import { NetworkActivityAnalysisService } from './network-activity-analysis.service';

describe('NetworkActivityAnalysisService', () => {
  let service: NetworkActivityAnalysisService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [NetworkActivityAnalysisService],
    }).compile();

    service = module.get<NetworkActivityAnalysisService>(
      NetworkActivityAnalysisService,
    );
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
