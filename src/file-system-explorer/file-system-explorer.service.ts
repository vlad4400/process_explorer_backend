import { Injectable } from '@nestjs/common';
import * as fs from 'fs';
import * as path from 'path';
import { promisify } from 'util';

const readdir = promisify(fs.readdir);
const stat = promisify(fs.stat);

export interface DirectoryItem {
  name: string;
  isDirectory: boolean;
  size?: number;
  children?: DirectoryItem[];
}

@Injectable()
export class FileSystemExplorerService {
  async listDirectoryContents(
    directoryPath: string,
    depth: number = 0,
  ): Promise<any[]> {
    if (depth > 3) {
      return [];
    }

    try {
      const files = await readdir(directoryPath);
      const filesDetails = await Promise.all(
        files.map(async (file) => {
          const filePath = path.join(directoryPath, file);
          const fileStats = await stat(filePath);

          const item: DirectoryItem = {
            name: file,
            isDirectory: fileStats.isDirectory(),
            size: fileStats.size,
            children: [],
          };

          return item;
        }),
      );

      return filesDetails.filter((item) => !!item);
    } catch (error) {
      console.error(
        `Error listing directory contents for path "${directoryPath}": ${error.message}`,
      );
      throw new Error(`Error listing directory contents: ${error.message}`);
    }
  }
}
