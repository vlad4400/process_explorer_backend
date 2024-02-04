import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProcessMonitorModule } from './process-monitor/process-monitor.module';

@Module({
  imports: [ProcessMonitorModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
