import { Directive, ElementRef, HostListener, Input, OnChanges, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[pStyle]'
})
export class PShadowDirective implements OnChanges {
  @Input() raduis1: string = "10px";
  @Input() raduis2: string = "20px";
  constructor(private el: ElementRef) {
    this.el.nativeElement.style.boxShadow = '0 2px 3px rgba(0, 0, 0, 0.3)';
    // this.el.nativeElement.style.borderRadius = '5px';
  }
  ngOnChanges(): void {
    this.el.nativeElement.style.borderRadius = this.raduis1;
  }
  @HostListener('mouseover') incFunc() {
    this.el.nativeElement.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.5)';
    this.el.nativeElement.style.borderRadius = this.raduis2;
  }
  @HostListener('mouseout') defFunc() {
    this.el.nativeElement.style.boxShadow = '0 2px 3px rgba(0, 0, 0, 0.3)';
    this.el.nativeElement.style.borderRadius = this.raduis1;
  }

}
