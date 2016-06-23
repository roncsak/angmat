import {Injectable} from '@angular/core';

import {Motor} from './motor';
import {Motors} from './mocks/mock-motors';

let motorPromise = Promise.resolve(Motors);

@Injectable()
export class MotorService {

  getMotor(id: string) {
    return motorPromise
      .then(motor => motor.filter(m => m.manufacturer === id));
  }
  
  getMotors() {
    return motorPromise;
  }
}
