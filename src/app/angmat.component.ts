import { Component, OnInit }                      from '@angular/core';
import { ROUTER_DIRECTIVES }                      from '@angular/router';

import { MD_BUTTON_DIRECTIVES }                   from '@angular2-material/button';
// import { MD_CARD_DIRECTIVES }                     from '@angular2-material/card';
// import { MD_CHECKBOX_DIRECTIVES }                 from '@angular2-material/checkbox';
import { MD_ICON_DIRECTIVES, MdIconRegistry }     from '@angular2-material/icon';
// import { MD_INPUT_DIRECTIVES }                    from '@angular2-material/input';
// import { MD_LIST_DIRECTIVES }                     from '@angular2-material/list';
// import { MD_PROGRESS_BAR_DIRECTIVES }             from '@angular2-material/progress-bar';
// import { MD_PROGRESS_CIRCLE_DIRECTIVES }          from '@angular2-material/progress-circle';
// import { MD_RADIO_DIRECTIVES, MdRadioDispatcher } from '@angular2-material/radio';
import { MD_SIDENAV_DIRECTIVES }                  from '@angular2-material/sidenav';
// import { MD_TABS_DIRECTIVES }                     from '@angular2-material/tabs';
import { MD_TOOLBAR_DIRECTIVES }                  from '@angular2-material/toolbar';

@Component({
  moduleId: module.id,
  selector: 'angmat-app',
  templateUrl: 'angmat.component.html',
  styleUrls: ['angmat.component.css'],
  providers: [
    // MdRadioDispatcher,
    MdIconRegistry
  ],
  directives: [
    ROUTER_DIRECTIVES,
    MD_BUTTON_DIRECTIVES,
    // MD_CARD_DIRECTIVES,
    // MD_CHECKBOX_DIRECTIVES,
    MD_ICON_DIRECTIVES,
    // MD_INPUT_DIRECTIVES,
    // MD_LIST_DIRECTIVES,
    // MD_PROGRESS_BAR_DIRECTIVES,
    // MD_PROGRESS_CIRCLE_DIRECTIVES,
    // MD_RADIO_DIRECTIVES,
    MD_SIDENAV_DIRECTIVES,
    // MD_TABS_DIRECTIVES,
    MD_TOOLBAR_DIRECTIVES
  ]
})

export class AngmatAppComponent implements OnInit {
  title = 'angmat works!';

  constructor() { }

  ngOnInit() { }
}
