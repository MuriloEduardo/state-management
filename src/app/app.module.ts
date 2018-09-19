import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ModalModule } from 'ngx-bootstrap/modal';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { simpleReducer } from './reducers/simple.reducer';
import { postReducer } from './reducers/post.reducer';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        AppRoutingModule,
        BsDropdownModule.forRoot(),
        TooltipModule.forRoot(),
        ModalModule.forRoot(),
        StoreModule.forRoot({
            post: postReducer,
            message: simpleReducer
        }),
        StoreDevtoolsModule.instrument({
            maxAge: 10
        })
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
