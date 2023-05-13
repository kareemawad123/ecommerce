import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[pStyle]'
})
export class PShadowDirective {

  constructor(private el: ElementRef) {
    this.el.nativeElement.style.boxShadow= '0 2px 3px rgba(0, 0, 0, 0.3)';
    this.el.nativeElement.style.borderRadius= '6px';
  }
  @HostListener('mouseover') incFunc(){
    this.el.nativeElement.style.boxShadow= '0 4px 6px rgba(0, 0, 0, 0.5)';
  }
  @HostListener('mouseout') defFunc(){
    this.el.nativeElement.style.boxShadow= '0 2px 3px rgba(0, 0, 0, 0.3)';
  }

}
