import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { MenuAdminComponent } from './components/menu-admin/menu-admin.component';
import { MenuUsuarioComponent } from './components/menu-usuario/menu-usuario.component';
import { UbicacionComponent } from './components/ubicacion/ubicacion.component';
import { UsuarioComponent } from './components/usuario/usuario.component';
import { GgeeComponent } from './components/ggee/ggee.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MenuAdminComponent,
    MenuUsuarioComponent,
    UbicacionComponent,
    UsuarioComponent,
    GgeeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
