import { HttpClientModule } from '@angular/common/http';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { NavbarComponent } from './shard/navbar/navbar.component';
import { FooterComponent } from './shard/footer/footer.component';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { MatIconModule } from '@angular/material/icon';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    LoginComponent,
    
    // ... other components
  ],
  imports: [ 
    RouterModule,
    HttpClientModule,
    BrowserModule,
    MatIconModule,
    FormsModule
    // ... other modules
  ],
  providers: [
    // ... your services
  ], 
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA], // Add this line if you're using CUSTOM_ELEMENTS_SCHEMA
})
export class AppModule { }
