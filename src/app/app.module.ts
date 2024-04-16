import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TareasBSHComponent } from './components/tareas-bsh/tareas-bsh.component';
import { NavBarBSHComponent } from './components/nav-bar-bsh/nav-bar-bsh.component';

@NgModule({
  declarations: [
    AppComponent,
    TareasBSHComponent,
    NavBarBSHComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
