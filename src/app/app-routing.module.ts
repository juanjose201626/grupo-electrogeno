import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { MenuAdminComponent } from './components/menu-admin/menu-admin.component';
import { UbicacionComponent } from './components/ubicacion/ubicacion.component';
import { UsuarioComponent } from './components/usuario/usuario.component';
import { GgeeComponent } from './components/ggee/ggee.component';

const routes: Routes = [
  { path: 'menu-admin', component: MenuAdminComponent },
  { path: 'ubicacion', component: UbicacionComponent },
  { path: 'usuario', component: UsuarioComponent },
  { path: 'ggee', component: GgeeComponent },
  { path: 'login', component: LoginComponent },
  { path: '',   redirectTo: '/login', pathMatch: 'full' },
  { path: '**', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
