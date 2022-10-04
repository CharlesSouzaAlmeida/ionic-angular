import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { NgifComponent } from './ngif/ngif.component';
import { NgifcontatosComponent } from './ngifcontatos/ngifcontatos.component';
import { NgforComponent } from './ngfor/ngfor.component';
import { CursosModule } from './cursos/cursos.module';
import { routing } from './app.routing';

@NgModule({
  declarations: [
    AppComponent,
    NgifComponent,
    NgifcontatosComponent,
    NgforComponent,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    CursosModule,
    routing,
  ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
