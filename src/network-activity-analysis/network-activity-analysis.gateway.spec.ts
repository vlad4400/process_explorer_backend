import { Test, TestingModule } from '@nestjs/testing';
import { NetworkActivityAnalysisGateway } from './network-activity-analysis.gateway';

describe('NetworkActivityAnalysisGateway', () => {
  let gateway: NetworkActivityAnalysisGateway;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [NetworkActivityAnalysisGateway],
    }).compile();

    gateway = module.get<NetworkActivityAnalysisGateway>(
      NetworkActivityAnalysisGateway,
    );
  });

  it('should be defined', () => {
    expect(gateway).toBeDefined();
  });
});
