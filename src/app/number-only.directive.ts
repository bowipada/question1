import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[NumberOnly]'
})
export class NumberOnlyDirective {
  constructor () { }
  @HostListener('keypress', ['$event'])
  onKeyPress(e) {
    // Allow: Ctrl+A
    if ((e.keyCode == 65 && (e.ctrlKey || e.metaKey)) ||
      // Allow: Ctrl+C
      (e.keyCode == 67 && (e.ctrlKey || e.metaKey)) ||
      // Allow: Ctrl+V
      (e.keyCode == 86 && (e.ctrlKey || e.metaKey)) ||
      // Allow: Ctrl+X
      (e.keyCode == 88 && (e.ctrlKey || e.metaKey)) ||
      // Allow: home, end, left, right
      (e.keyCode >= 35 && e.keyCode <= 39) ||
      (e.key === "Backspace")) {
      // 0-9 only
      return;
    }
    let ch = String.fromCharCode(e.keyCode);
    let regEx = new RegExp('^[0-9.-]*$');
    if (regEx.test(ch)) {
      return;
    }
    else {
      e.preventDefault();
    }
  }

}
