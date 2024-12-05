import { Injectable } from '@nestjs/common';
import { readFileSync } from 'fs';
import { join } from 'path';

@Injectable()
export class AppService {
  private visitCount = 0;
  serveFrontend(): string {
    const filePath = join(__dirname, '../../frontend/build/index.html');
    this.visitCount+=1;
    console.log("Visit Count: ",this.visitCount)
    return readFileSync(filePath, 'utf8');
  }
}
