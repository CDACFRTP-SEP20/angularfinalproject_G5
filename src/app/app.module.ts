import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule,ReactiveFormsModule} from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import { MaterialModule } from './material/material.module';
import { HttpClientModule, HttpClient, HTTP_INTERCEPTORS} from '@angular/common/http'
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { AuthinterceptorService } from './shared/auth-interceptor.service';
import { MatConfirmDialogComponent } from './admin/mat-confirm-dialog/mat-confirm-dialog.component';
import { ChartsModule } from 'ng2-charts';



@NgModule({
  declarations: [
    AppComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ChartsModule,
    TranslateModule.forRoot({
      loader:{

        provide:TranslateLoader,
        useFactory:HttpLoadFactory,
        deps:[HttpClient]
      }

    }),
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthinterceptorService,
      multi: true
    }

  ],
  bootstrap: [AppComponent],
  entryComponents: [MatConfirmDialogComponent]
})
export class AppModule { }
export function HttpLoadFactory(http:HttpClient)
{
  return new TranslateHttpLoader(http);
}
