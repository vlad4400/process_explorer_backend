import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProcessMonitorModule } from './process-monitor/process-monitor.module';
import { MemoryAnalysisModule } from './memory-analysis/memory-analysis.module';
import { FileSystemExplorerModule } from './file-system-explorer/file-system-explorer.module';

@Module({
  imports: [
    ProcessMonitorModule,
    MemoryAnalysisModule,
    FileSystemExplorerModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
