import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {EffectsModule} from '@ngrx/effects';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.componet';
import {AppRoutingModule} from './app-routing.module';
import { Sharedmodule } from './shared/shared.module';
import { CoreModule } from './core.module';
import {StoreModule} from '@ngrx/store';
import * as fromApp from './store/app.reducer';
import { AuthEffects } from './auth/store/auth.effects';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,

    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    StoreModule.forRoot(fromApp.appReducer),
    EffectsModule.forRoot([AuthEffects]),
    Sharedmodule,
    CoreModule,
  ],
  
  bootstrap: [AppComponent]
})
export class AppModule { }
