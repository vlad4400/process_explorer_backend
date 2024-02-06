import { Module } from '@nestjs/common';
import { NetworkActivityAnalysisService } from './network-activity-analysis.service';
import { NetworkActivityAnalysisGateway } from './network-activity-analysis.gateway';

@Module({
  providers: [NetworkActivityAnalysisService, NetworkActivityAnalysisGateway],
})
export class NetworkActivityAnalysisModule {}
