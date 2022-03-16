import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormularioComponent } from './components/formulario/formulario.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { SearchUfComponent } from './components/search-uf/search-uf.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'contato', component: FormularioComponent },
  { path: 'buscauf', component: SearchUfComponent },
  { path: '' , redirectTo: '/home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
