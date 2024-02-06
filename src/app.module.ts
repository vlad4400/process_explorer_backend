import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProcessMonitorModule } from './process-monitor/process-monitor.module';
import { MemoryAnalysisModule } from './memory-analysis/memory-analysis.module';
import { FileSystemExplorerModule } from './file-system-explorer/file-system-explorer.module';
import { InputOutputMonitorModule } from './input-output-monitor/input-output-monitor.module';
import { NetworkActivityAnalysisModule } from './network-activity-analysis/network-activity-analysis.module';
import { UserAccountsModule } from './user-accounts/user-accounts.module';

@Module({
  imports: [
    ProcessMonitorModule,
    MemoryAnalysisModule,
    FileSystemExplorerModule,
    InputOutputMonitorModule,
    NetworkActivityAnalysisModule,
    UserAccountsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
