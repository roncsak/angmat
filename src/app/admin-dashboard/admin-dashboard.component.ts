import { Component, OnInit } from '@angular/core';

import { ROUTER_DIRECTIVES }                      from '@angular/router';
import { MD_LIST_DIRECTIVES }                     from '@angular2-material/list';

import { Motor }        from '../motor';
import { MotorService } from '../motor.service';

@Component({
  moduleId: module.id,
  selector: 'app-admin-dashboard',
  templateUrl: 'admin-dashboard.component.html',
  styleUrls: ['admin-dashboard.component.css'],
  directives: [MD_LIST_DIRECTIVES, ROUTER_DIRECTIVES],
  providers: [MotorService]
})
export class AdminDashboardComponent implements OnInit {
  motors: Motor[];

  constructor(
    private motorService: MotorService
  ) {}

  ngOnInit() {
    this.getMotors();
  }

  getMotors() {
    this.motorService.getMotors().then(motors => this.motors = motors);
  }

}
