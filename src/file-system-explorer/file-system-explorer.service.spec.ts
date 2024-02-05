import { Test, TestingModule } from '@nestjs/testing';
import { FileSystemExplorerService } from './file-system-explorer.service';

describe('FileSystemExplorerService', () => {
  let service: FileSystemExplorerService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FileSystemExplorerService],
    }).compile();

    service = module.get<FileSystemExplorerService>(FileSystemExplorerService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
