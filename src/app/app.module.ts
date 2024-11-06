import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrimerComponent } from './components/primercomponent/primer.component';
import { HooksAngular } from './components/hooksangular/hooksangular.component';
import { DeportesComponent } from './components/deportes/deportes.component';
import { FormsBindingComponent } from './components/formsbinding/Formsbinding.component';
import { SumarNumerosComponent } from './components/sumarnumeros/sumarnumeros.component';
import { TablaMultiplicarComponent } from './components/tablamultiplicar/tablamultiplicar.component';

@NgModule({
  declarations: [
    AppComponent,
    PrimerComponent,
    HooksAngular,
    DeportesComponent,
    FormsBindingComponent,
    SumarNumerosComponent,
    TablaMultiplicarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
