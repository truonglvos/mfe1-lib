import { Directive, ElementRef } from '@angular/core';
import { ImageService } from './image.service';

@Directive({
  selector: 'img',
})
export class ImageDirective {
  constructor(private el: ElementRef, private imageService: ImageService) {
    const img = this.el.nativeElement as HTMLImageElement;
    img.src = this.imageService.replaceDomain(img.src);
  }
}
