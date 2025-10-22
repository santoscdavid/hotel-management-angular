import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS, provideHttpClient } from '@angular/common/http';
import { NgModule, Optional, SkipSelf } from '@angular/core';
import { AuthInterceptor } from './interceptors/auth.interceptor';

@NgModule({
  declarations: [],
  providers: [
    provideHttpClient(),
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
  ],
  imports: [CommonModule],
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error('CoreModule já foi carregado. Importe-o apenas no AppModule.');
    }
  }
}
