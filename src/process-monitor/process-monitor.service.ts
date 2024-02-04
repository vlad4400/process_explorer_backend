import { Injectable } from '@nestjs/common';
import * as pidusage from 'pidusage';
import { exec } from 'child_process';
import { promisify } from 'util';
import * as os from 'os';

const execAsync = promisify(exec);

// interface ProcessInfo {
//   pid: number;
//   cpu: number;
//   memory: number;
// }

interface Process {
  pid: number;
  command: string;
  cpu: number;
  mem: number;
}

@Injectable()
export class ProcessMonitorService {
  // Function to list all processes
  async getAllProcesses(): Promise<any> {
    try {
      let command = '';

      if (os.platform() === 'win32') {
        command = 'tasklist'; // Command for Windows
      } else {
        command = 'ps -eo pid,comm,pcpu,pmem --sort=-pcpu'; // Command for Unix / Linux
      }

      const { stdout, stderr } = await execAsync(command);
      if (stderr) {
        throw new Error(`Error fetching process list: ${stderr}`);
      }

      const processes =
        os.platform() === 'win32'
          ? this._convertWindowsToJSON(stdout)
          : this._convertUnixToJSON(stdout);

      if (!processes) {
        throw new Error('Unable to parse process list');
      }

      return processes;
    } catch (error) {
      throw new Error(`Cannot obtain the process list: ${error.message}`);
    }
  }

  // Function to get statistics for a single process
  async getProcessInfo(processId: number): Promise<any> {
    try {
      const stats = await pidusage(processId);
      return stats;
    } catch (error) {
      throw new Error(
        `Unable to retrieve process information: ${error.message}`,
      );
    }
  }

  private _convertWindowsToJSON(data: string): any[] {
    const lines = data.trim().split('\n').slice(3);
    return lines
      .map((line) => {
        const columns = line.trim().split(/\s+/);
        return {
          pid: columns[1],
          command: columns[0],
        };
      })
      .filter((process) => process !== null);
  }

  private _convertUnixToJSON(data: string): Process[] {
    const lines = data.trim().split('\n');
    const processLines = lines.slice(1);

    const processes = processLines
      .map((line) => {
        const match = line.match(/(\d+)\s+(\w+)\s+([\d.]+)\s+([\d.]+)/);
        if (!match) return null;

        return {
          pid: parseInt(match[1], 10),
          command: match[2],
          cpu: parseFloat(match[3]),
          mem: parseFloat(match[4]),
        };
      })
      .filter((process) => process !== null);

    return processes;
  }
}
