import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { GithubUserService } from 'src/services/github-user.service';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { FilterPipe } from 'src/shared/searchFilter.pipe';
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  declarations: [
    AppComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    NgxPaginationModule
  ],
  providers: [
    GithubUserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
