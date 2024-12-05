import { Injectable } from '@nestjs/common';
import { readFileSync } from 'fs';
import { join } from 'path';

@Injectable()
export class AppService {
  serveFrontend(): string {
    let visitCount = 0;
    const filePath = join(__dirname, '../../frontend/build/index.html');
    visitCount+=1;
    console.log("Visit Count: ",visitCount)
    return readFileSync(filePath, 'utf8');
  }
}
