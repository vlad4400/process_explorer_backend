import { Module } from '@nestjs/common';
import { FileSystemExplorerService } from './file-system-explorer.service';
import { FileSystemExplorerGateway } from './file-system-explorer.gateway';

@Module({
  providers: [FileSystemExplorerService, FileSystemExplorerGateway],
})
export class FileSystemExplorerModule {}
