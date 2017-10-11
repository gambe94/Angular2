import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { Ng2BootstrapModule } from 'ngx-bootstrap';
import { ListComponent } from './list/list.component';
import { DetailsComponent } from './details/details.component';
import { EditComponent } from './edit/edit.component';
import { FilterComponent } from './filter/filter.component';
import { Route, RouterModule } from '@angular/router';
import { AdvertisementTypePipe } from './advertisement-type.pipe';
const routes: Route[] = [
  { path: '', component: ListComponent },
  { path: 'details/:id', component: DetailsComponent },
  { path: 'edit/:id', component: EditComponent },
  { path: 'create', component: EditComponent }
];
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    DetailsComponent,
    EditComponent,
    FilterComponent,
    AdvertisementTypePipe
  ],
  imports: [
    BrowserModule,
    HttpModule,
    Ng2BootstrapModule,
    RouterModule.forRoot(routes),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
