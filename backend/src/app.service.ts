import { Injectable } from '@nestjs/common';
import { readFileSync } from 'fs';
import { join } from 'path';

@Injectable()
export class AppService {
  serveFrontend(): string {
    const filePath = join(__dirname, '../../frontend/build/index.html');
    console.log(__dirname)
    return readFileSync(filePath, 'utf8');
  }
}
