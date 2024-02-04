import { Module } from '@nestjs/common';
import { ProcessMonitorService } from './process-monitor.service';
import { ProcessMonitorController } from './process-monitor.controller';

@Module({
  providers: [ProcessMonitorService],
  controllers: [ProcessMonitorController],
})
export class ProcessMonitorModule {}
