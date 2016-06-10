import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { AngmatAppComponent } from '../app/angmat.component';

beforeEachProviders(() => [AngmatAppComponent]);

describe('App: Angmat', () => {
  it('should create the app',
      inject([AngmatAppComponent], (app: AngmatAppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'angmat works!\'',
      inject([AngmatAppComponent], (app: AngmatAppComponent) => {
    expect(app.title).toEqual('angmat works!');
  }));
});
