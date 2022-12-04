import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'ngbd-accordion-header',
  templateUrl: './accordion.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./accordion.component.css'],
})
export class NgbdAccordionHeader {
  disabled = false;
}
