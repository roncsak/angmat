import {Injectable} from '@angular/core';

import {Motor} from './motor';
import {Motors} from './mocks/mock-motors';

@Injectable()
export class MotorService {
  getMotors() {
    return Promise.resolve(Motors);
  }
}
