import { Module } from '@nestjs/common';
import { InputOutputMonitorService } from './input-output-monitor.service';
import { InputOutputMonitorGateway } from './input-output-monitor.gateway';

@Module({
  providers: [InputOutputMonitorService, InputOutputMonitorGateway],
})
export class InputOutputMonitorModule {}
