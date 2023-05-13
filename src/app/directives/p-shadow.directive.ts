import { Directive, ElementRef, HostListener, OnChanges, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[pStyle]'
})
export class PShadowDirective implements OnChanges{

  constructor(private el: ElementRef) {
    this.el.nativeElement.style.boxShadow= '0 2px 3px rgba(0, 0, 0, 0.3)';
    this.el.nativeElement.style.borderRadius= '6px';
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log("P:"+changes);
  }
  @HostListener('mouseover') incFunc(){
    this.el.nativeElement.style.boxShadow= '0 4px 6px rgba(0, 0, 0, 0.5)';
  }
  @HostListener('mouseout') defFunc(){
    this.el.nativeElement.style.boxShadow= '0 2px 3px rgba(0, 0, 0, 0.3)';
  }

}
