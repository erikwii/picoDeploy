import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { ScreenOrientation } from '@ionic-native/screen-orientation';
import { IonicStorageModule } from '@ionic/storage';

import { MyApp } from './app.component';
import { SettingsProvider } from '../providers/settings/settings';
import { PicoDbProvider } from '../providers/pico-db/pico-db';
import { PlatformSdkWrapperProvider } from '../providers/platform-sdk-wrapper/platform-sdk-wrapper';

@NgModule({
  declarations: [
    MyApp
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp
  ],
  providers: [
    StatusBar,
    SplashScreen,
    ScreenOrientation,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    SettingsProvider,
    PicoDbProvider,
    PlatformSdkWrapperProvider
  ]
})
export class AppModule {}
