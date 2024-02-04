import { Module } from '@nestjs/common';
import { ProcessMonitorService } from './process-monitor.service';
import { ProcessMonitorGateway } from './process-monitor.gateway';

@Module({
  providers: [ProcessMonitorService, ProcessMonitorGateway],
})
export class ProcessMonitorModule {}
