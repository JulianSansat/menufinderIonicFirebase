import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { AboutPage } from '../pages/about/about';
import { EstablishmentsPage } from '../pages/establishments/establishments';
import { EstablishmentDetailPage } from '../pages/establishment-detail/establishment-detail';
import { ProductsPage } from '../pages/products/products';
import { TabsPage } from '../pages/tabs/tabs';
import { HttpModule } from '@angular/http';
import { EstablishmentService } from './services/establishment.service';
import { ProductService } from './services/product.service';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    EstablishmentsPage,
    EstablishmentDetailPage,
    ProductsPage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    EstablishmentsPage,
    EstablishmentDetailPage,
    ProductsPage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    EstablishmentService,
    ProductService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
