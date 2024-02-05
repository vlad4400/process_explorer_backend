import { Test, TestingModule } from '@nestjs/testing';
import { FileSystemExplorerGateway } from './file-system-explorer.gateway';

describe('FileSystemExplorerGateway', () => {
  let gateway: FileSystemExplorerGateway;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FileSystemExplorerGateway],
    }).compile();

    gateway = module.get<FileSystemExplorerGateway>(FileSystemExplorerGateway);
  });

  it('should be defined', () => {
    expect(gateway).toBeDefined();
  });
});
