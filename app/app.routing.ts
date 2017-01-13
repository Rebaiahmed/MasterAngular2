import { Routes , RouterModule} from '@angular/router' ;



import { AppComponent }  from './app.component';
import { SearchComponent} from './SearchBar/SearchBar.Component'
import { VideosComponent } from './Videos/Videos.Component';
import { VideoDetailsComponent} from './Video_Details/Video_Details.Component';
import { TutorialsComponent } from './Tutorials/Tutorials.Component';
import { AboutComponent} from './About/About.component'
import { BlogsComponent}  from './Blogs/Blogs.Component';
import { ProfileComponent} from './Profile/Profile.Component'
import { QuizzComponent} from './Quiz/Quiz.component'

//**************import the service for the protected routes****//



 const routes : Routes = [
    {
        path :'Videos', component : VideosComponent
    },
     
      {
        path :'tutorials', component : TutorialsComponent
       },
 {
        path :'blogs', component :BlogsComponent
       },
       {
        path :'profile', component :ProfileComponent
       },

       {
        path :'About', component :AboutComponent
       },

        {
        path :'quizz', component :QuizzComponent
       },
        {
        path :'**', redirectTo :'Videos'
       }
]


export const rouing = RouterModule.forRoot(routes);