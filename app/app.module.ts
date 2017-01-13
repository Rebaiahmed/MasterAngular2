import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http' ;
import { FormsModule } from '@angular/forms';


import { rouing } from './app.routing' ;

//**************Importer Components*********************//
import { AppComponent }  from './app.component';
import { SearchComponent} from './SearchBar/SearchBar.Component'
import { VideosComponent } from './Videos/Videos.Component';
import { VideoDetailsComponent} from './Video_Details/Video_Details.Component';
import { TutorialsComponent } from './Tutorials/Tutorials.Component';
import { ProfileComponent} from './Profile/Profile.Component'
import { AboutComponent} from './About/About.component'
import { QuizzComponent} from './Quiz/Quiz.component'
import { BlogsComponent}  from './Blogs/Blogs.Component';

//***********importer les services**********************************//

import { VideoService} from './Service/Video.Service' ;

@NgModule({
  imports:      [ BrowserModule,HttpModule,FormsModule, rouing ],
  declarations: [ AppComponent,VideosComponent,TutorialsComponent,ProfileComponent, AboutComponent, BlogsComponent,SearchComponent,QuizzComponent ],
  bootstrap:    [ AppComponent ],
  providers : [VideoService]
})
export class AppModule { }
