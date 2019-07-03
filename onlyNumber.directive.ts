import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[onlyNumber]'
})
export class OnlyNumberDirective {
  constructor() { }
  @HostListener('keydown', ['$event'])
  onKeyDown(event) {
    var regex = new RegExp("^[0-9]*$");

    var key = String.fromCharCode(!event.charCode ? event.which : event.charCode);
    console.log(key)
    if (!regex.test(key)) {
      event.preventDefault();
      return false;
    }

  }
}
