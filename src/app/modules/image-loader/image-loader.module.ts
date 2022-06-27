import { ModuleWithProviders, NgModule } from "@angular/core";
import { ImageService } from "./image-loader.service";

@NgModule({})
export class ImageLoaderModule {
  static forRoot(): ModuleWithProviders<ImageLoaderModule> {
    return {
      ngModule: ImageLoaderModule,
      providers: [ImageService],
    };
  }
}
