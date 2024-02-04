import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProcessMonitorModule } from './process-monitor/process-monitor.module';
import { MemoryAnalysisModule } from './memory-analysis/memory-analysis.module';

@Module({
  imports: [ProcessMonitorModule, MemoryAnalysisModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
