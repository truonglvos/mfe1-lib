import { Inject, Injectable, Optional } from '@angular/core';
import { IMAGE_DOMAIN, IMAGE_MODULE_ROOT, SHELL_DOMAIN } from './constant';

@Injectable({
  providedIn: 'root',
})
export class ImageService {
  constructor(
    @Optional() @Inject(IMAGE_MODULE_ROOT) private moduleRoot: boolean,
    @Inject(SHELL_DOMAIN) private shell: string,
    @Inject(IMAGE_DOMAIN) private domain: string
  ) {}
  getImageUrl(imagePath: string): string {
    if (this.moduleRoot) {
      return imagePath;
    }
    if (!this.domain) {
      throw new Error('No domain available for image loading.');
    }
    if (!imagePath) {
      throw new Error('No image src available for image loading.');
    }
    return `${this.domain}${
      imagePath.startsWith('/') ? imagePath : `/${imagePath}`
    }`;
  }

  replaceDomain(src: string): string {
    if (this.moduleRoot) {
      return src;
    }
    return src.replace(this.shell, this.domain);
  }
}
