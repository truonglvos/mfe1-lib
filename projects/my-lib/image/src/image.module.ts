import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImageComponent } from './image.component';
import { ImageDirective } from './image.directive';
import { ImageService } from './image.service';
import { IMAGE_DOMAIN, IMAGE_MODULE_ROOT, SHELL_DOMAIN } from './constant';

@NgModule({
  declarations: [ImageComponent, ImageDirective],
  imports: [CommonModule],
  exports: [ImageComponent, ImageDirective],
})
export class ImageModule {
  static hasCallForRoot = false;
  static forRoot(): ModuleWithProviders<ImageModule> {
    if (ImageModule.hasCallForRoot) {
      throw new Error(
        `The ImageModule was provided more than once. This can happen if 'forRoot' is used outside of the root injector. Lazy loaded modules should use ImageModule.forChild() instead`
      );
    }
    ImageModule.hasCallForRoot = true;
    return {
      ngModule: ImageModule,
      providers: [{ provide: IMAGE_MODULE_ROOT, useValue: true }, ImageService],
    };
  }

  static forChild(config: {
    shell: string;
    mfe: string;
  }): ModuleWithProviders<ImageModule> {
    return {
      ngModule: ImageModule,
      providers: [
        { provide: IMAGE_DOMAIN, useValue: config.mfe },
        { provide: SHELL_DOMAIN, useValue: config.shell },
        ImageService,
      ],
    };
  }
}
