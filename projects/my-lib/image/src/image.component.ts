import { Component, Input } from '@angular/core';
import { ImageService } from './image.service';

@Component({
  selector: 'lib-image',
  templateUrl: './image.component.html',
})
export class ImageComponent {
  @Input() src: string = '';
  @Input() alt: string = '';
  @Input() width: string = '';
  @Input() height: string = '';
  @Input() class: string = '';
  @Input() style: string = '';

  processedSrc!: string;

  constructor(private imageService: ImageService) {
    console.log('@@@appImageComponent');
  }

  ngOnInit(): void {
    this.processedSrc = this.imageService.getImageUrl(this.src);
  }
}
