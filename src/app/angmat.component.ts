import { Component } from '@angular/core';
import { MD_CARD_DIRECTIVES } from '@angular2-material/card';
import { MD_BUTTON_DIRECTIVES } from '@angular2-material/button';
import { MD_TOOLBAR_DIRECTIVES } from '@angular2-material/toolbar';
import { MD_ICON_DIRECTIVES, MdIconRegistry } from '@angular2-material/icon';

@Component({
  moduleId: module.id,
  selector: 'angmat-app',
  templateUrl: 'angmat.component.html',
  styleUrls: ['angmat.component.css'],
  providers: [MdIconRegistry],
  directives: [
    MD_TOOLBAR_DIRECTIVES,
    MD_CARD_DIRECTIVES,
    MD_BUTTON_DIRECTIVES,
    MD_ICON_DIRECTIVES
  ]
})
export class AngmatAppComponent {
  title = 'angmat works!';
}
