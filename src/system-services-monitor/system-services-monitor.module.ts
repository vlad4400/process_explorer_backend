import { Module } from '@nestjs/common';
import { SystemServicesMonitorService } from './system-services-monitor.service';
import { SystemServicesMonitorGateway } from './system-services-monitor.gateway';

@Module({
  providers: [SystemServicesMonitorService, SystemServicesMonitorGateway]
})
export class SystemServicesMonitorModule {}
