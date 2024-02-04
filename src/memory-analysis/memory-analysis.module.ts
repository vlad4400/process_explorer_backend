import { Module } from '@nestjs/common';
import { MemoryAnalysisService } from './memory-analysis.service';
import { MemoryAnalysisGateway } from './memory-analysis.gateway';

@Module({
  providers: [MemoryAnalysisService, MemoryAnalysisGateway],
})
export class MemoryAnalysisModule {}
