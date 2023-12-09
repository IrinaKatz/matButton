import {Directive, ElementRef, Input, OnChanges, Renderer2, SimpleChanges} from '@angular/core';

@Directive({
  selector: '[isViewerDisabled]',
  standalone: true
})
export class IsViewerDisabledDirective implements OnChanges{

  @Input() isViewerDisabled: boolean = false;
  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['isViewerDisabled']) {
      if (this.isViewerDisabled) {
        this.renderer.addClass(this.el.nativeElement, 'disabled-button');
      } else {
        this.renderer.removeClass(this.el.nativeElement, 'disabled-button');
      }
    }
  }

}
