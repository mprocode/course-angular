import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { InputComponentComponent } from './input-component/input-component.component';
import { ClientComponentComponent } from './input-component/client-component/client-component.component';
import { InterceptandoComponent } from './interceptando/interceptando.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material';
import { MatIconModule } from '@angular/material';

import { NomeComponent } from './interceptando/nome/nome.component';

import {MatListModule} from '@angular/material/list';
import { EmitterComponent } from './emitter/emitter.component';
import { EmitterListaComponent } from './emitter-lista/emitter-lista.component';
import { ChildItemComponent } from './emitter/child-item/child-item.component';

import { ItemClienteComponent } from './emitter-lista/item-cliente/item-cliente.component';
import { ComunicacaoParentChildComponent } from './comunicacao-parent-child/comunicacao-parent-child.component';
import { CronometroComponent } from './comunicacao-parent-child/cronometro/cronometro.component';

import { MatProgressBarModule } from '@angular/material';
import { NgOnChangesComponent } from './ng-on-changes/ng-on-changes.component';
import { NomeChangesComponent } from './ng-on-changes/nome-changes/nome-changes.component';

@NgModule({
  declarations: [
    AppComponent,
    InputComponentComponent,
    ClientComponentComponent,
    InterceptandoComponent,
    NomeComponent,
    EmitterComponent,

    ItemClienteComponent,
    EmitterListaComponent,
    ChildItemComponent,
    ComunicacaoParentChildComponent,
    CronometroComponent,
    NgOnChangesComponent,
    NomeChangesComponent,
    
  ],
  imports: [
    BrowserModule,

    FormsModule, 
    ReactiveFormsModule,
    BrowserAnimationsModule,


    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatCardModule,
    MatIconModule,

    MatListModule,

    MatProgressBarModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
