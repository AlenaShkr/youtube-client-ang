import { Directive, ElementRef, Renderer2, OnChanges, Input  } from '@angular/core';

@Directive({
  selector: '[appBorderDownDependOnPublishDate]'
})
export class BorderDownDependOnPublishDateDirective implements OnChanges {
  @Input('appBorderDownDependOnPublishDate') public dateData: string;
  public color: string;

  constructor(private elementRef: ElementRef, private renderer2: Renderer2) { }
  private highlight(color: string): void {
    this.renderer2.setStyle(this.elementRef.nativeElement, 'border-bottom-style', 'solid');
    this.renderer2.setStyle(this.elementRef.nativeElement, 'border-bottom-width', '5px');
    this.renderer2.setStyle(this.elementRef.nativeElement, 'border-bottom-color', color);
  }

  public ngOnChanges(): void {
    this.color = defineColor(this.dateData);
    this.highlight(this.color);
  }
}

function defineColor(el: string): string {
  const publishDateInMilisec: number = Date.parse(el);
  const nowDate: number = Date.now();
  const duration: number = nowDate - publishDateInMilisec;
  const durationDay: number = Math.floor(duration / (1000 * 60 * 60 * 24));
  if (durationDay < 7 ) {
    return 'blue';
  }
  if (durationDay >= 7 && durationDay <= 30) {
    return 'green';
  }
  if (durationDay > 30 && durationDay <= 180) {
    return 'yellow';
  }
  if (durationDay > 180) {
    return 'red';
  }
}
