import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { provideStorage,getStorage } from '@angular/fire/storage';
import { ProductosComponent } from './pages/productos/productos.component';
import { ListadoComponent } from './pages/listado/listado.component';
import { AngularFireModule, FIREBASE_OPTIONS} from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { FormsModule } from '@angular/forms';
;

@NgModule({
  declarations: [
    AppComponent,
    ProductosComponent,
    ListadoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AppRoutingModule,
    // provideFirebaseApp(() => initializeApp(environment.firebase)),    
    // provideAuth(() => getAuth()),
    // provideFirestore(() => getFirestore()),
    // provideStorage(() => getStorage())
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule, 
  ],
  providers: [
    {provide: FIREBASE_OPTIONS, useValue: environment.firebaseConfig  }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
