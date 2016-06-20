import { Component, OnInit }                      from '@angular/core';
import { Router }                      from '@angular/router';
import { MD_LIST_DIRECTIVES }                     from '@angular2-material/list';

import { Motor }        from '../motor';
import { MotorService } from '../motor.service';

@Component({
  moduleId: module.id,
  selector: 'app-dashboard',
  templateUrl: 'dashboard.component.html',
  styleUrls: ['dashboard.component.css'],
  directives: [MD_LIST_DIRECTIVES],
  providers: [MotorService]
})
export class DashboardComponent implements OnInit {
  motors: Motor[];

  constructor(
      private motorService: MotorService
    , private router: Router
  ) { }

  getMotors() {
    this.motorService.getMotors().then(motors => this.motors = motors);
  }

  ngOnInit() {
    this.getMotors();
  }

  onSelect(motor: Motor) {
    // this.router.navigate(['/', motor.modell]);
  }
}
