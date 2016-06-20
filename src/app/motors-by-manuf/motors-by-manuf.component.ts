import { Component, OnInit, OnDestroy }           from '@angular/core';
import { Router, ActivatedRoute }                 from '@angular/router';
import { MD_LIST_DIRECTIVES }                     from '@angular2-material/list';

import { Motor }        from '../motor';
import { MotorService } from '../motor.service';

@Component({
  moduleId: module.id,
  selector: 'app-motors-by-manuf',
  templateUrl: 'motors-by-manuf.component.html',
  styleUrls: ['motors-by-manuf.component.css'],
  directives: [MD_LIST_DIRECTIVES],
  providers: [MotorService]
})
export class MotorsByManufComponent implements OnInit, OnDestroy {
  motors: Motor[];
  private sub: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private motorService: MotorService
  ) {}

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      let id = params['id'];
      this.motorService.getMotor(id).then(motors => this.motors = motors);
    })
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
