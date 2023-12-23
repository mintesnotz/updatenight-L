// scroll.directive.ts
import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appScroll]',
})
export class ScrollDirective {
  constructor(private el: ElementRef, private renderer: Renderer2) {}

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const scrollPosition =
      window.pageYOffset ||
      document.documentElement.scrollTop ||
      document.body.scrollTop ||
      0;

    // Adjust the value (e.g., 50) based on when you want the effect to trigger
    if (scrollPosition > 50) {
      this.renderer.addClass(this.el.nativeElement, 'scrolled');
    } else {
      this.renderer.removeClass(this.el.nativeElement, 'scrolled');
    }
  }
}
