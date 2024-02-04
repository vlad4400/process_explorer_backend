import { Injectable } from '@nestjs/common';
import * as os from 'os';

interface MemoryUsage {
  totalMemory: number;
  freeMemory: number;
  usedMemory: number;
}

@Injectable()
export class MemoryAnalysisService {
  getMemoryUsage(): MemoryUsage {
    const totalMemory = os.totalmem();
    const freeMemory = os.freemem();
    const usedMemory = totalMemory - freeMemory;
    return {
      totalMemory,
      freeMemory,
      usedMemory,
    };
  }
}
