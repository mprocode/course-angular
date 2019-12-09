import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgStyleComponentComponent } from './ng-style-component/ng-style-component.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms'; 
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material';
import { MatSelectModule } from '@angular/material';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material';
import { MatRadioModule } from '@angular/material';
import { NgClassComponentComponent } from './ng-class-component/ng-class-component.component';
import { NgIfComponentComponent } from './ng-if-component/ng-if-component.component';
import { MatCheckboxModule } from '@angular/material';
import { NgForComponentComponent } from './ng-for-component/ng-for-component.component';
import { MatListModule, MatIconModule } from '@angular/material';
import { NgForFormularioComponent } from './ng-for-formulario/ng-for-formulario.component';
import { NgSwitchComponentComponent } from './ng-switch-component/ng-switch-component.component';
import { MatProgressBarModule } from '@angular/material';
import { NgTemplateComponent } from './ng-template/ng-template.component';
import { NgContainerComponent } from './ng-container/ng-container.component';
import { NgContentComponent } from './ng-content/ng-content.component';

@NgModule({
  declarations: [
    AppComponent,
    NgStyleComponentComponent,
    NgClassComponentComponent,
    NgIfComponentComponent,
    NgForComponentComponent,
    NgForFormularioComponent,
    NgSwitchComponentComponent,
    NgTemplateComponent,
    NgContainerComponent,
    NgContentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatSelectModule,
    MatInputModule,
    MatFormFieldModule,
    MatCardModule,
    MatRadioModule,
    MatCheckboxModule,

    MatListModule, 
    MatIconModule,
    MatProgressBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
