import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './Pages/home/home.component';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { RegistroComponent } from './Pages/registro/registro.component' //Incluir
import {HttpClientModule} from '@angular/common/http';
import { ConcatenartextoPipe } from './concatenartexto.pipe';
import { MenuComponent } from './Components/menu/menu.component';
import { FooterComponent } from './Components/footer/footer.component';
import { LoginComponent } from './Pages/login/login.component';
import { DetalleComponent } from './Pages/detalle/detalle.component'
import { ListadosModule } from './listados/listados.module';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RegistroComponent,
    ConcatenartextoPipe,
    MenuComponent,
    FooterComponent,
    LoginComponent,
    DetalleComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,//Incluir
    ReactiveFormsModule, //Incluir
    HttpClientModule,
    ListadosModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

