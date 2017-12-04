import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ImageModifierComponent } from './image-modifier/image-modifier.component';
import {ImageModifierService} from './service/ImageModifierService';
import {AvailableImageActionService} from './service/AvailableImageActionService';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ImageModifierComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [ImageModifierService, AvailableImageActionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
