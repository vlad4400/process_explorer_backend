import { Injectable, Logger } from '@nestjs/common';
import { exec } from 'child_process';
import { promisify } from 'util';

export interface UserAccount {
  username: string;
  terminal: string;
  loginTime: string;
}

@Injectable()
export class UserAccountsService {
  private readonly logger = new Logger(UserAccountsService.name);
  private execPromise = promisify(exec);

  async getUserAccounts(): Promise<UserAccount[]> {
    try {
      const { stdout, stderr } = await this.execPromise('who');
      if (stderr) {
        throw new Error(`Error retrieving user accounts: ${stderr}`);
      }
      return stdout
        .split('\n')
        .filter((line) => line)
        .map((line) => {
          const parts = line.split(/\s+/);
          return {
            username: parts[0],
            terminal: parts[1],
            loginTime: parts.slice(2).join(' '),
          };
        });
    } catch (error) {
      this.logger.error(`Error retrieving user accounts: ${error.message}`);
      throw error;
    }
  }
}
