/* tslint:disable:no-unused-variable */

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';
import { MotorService } from './motor.service';

describe('Motor Service', () => {
  beforeEachProviders(() => [MotorService]);

  it('should ...',
      inject([MotorService], (service: MotorService) => {
    expect(service).toBeTruthy();
  }));
});
