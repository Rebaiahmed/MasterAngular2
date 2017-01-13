import { Component,ViewEncapsulation,OnInit } from '@angular/core';

import { Video} from '../models/Video';
import { VideoService} from '../Service/Video.Service';
import { VideoDetailsComponent} from '../Video_Details/Video_Details.Component';

import * as moment from 'moment';

@Component({
  moduleId:module.id,
  selector: 'videos',
  templateUrl: '../Videos/Videos.Component.html',

})
export class VideosComponent implements OnInit  { 

  videoList : Video []=[];
  activatedVideo : Video ;
  
//****déclarer attribut la liste des vidéos*****//

constructor(private videoService:VideoService){

}
//****injecter le service dans le constructor*****//


//***ngOnInit*************************//

ngOnInit()
{
  this.videoService.fetchVideos('Angular2')
     .subscribe( data => {this.videoList = data.items}
     ,error => this.displayError(error))
       

     
     
}
//****méthode addToFavorites******************//


//****like et dislike**********************//
private displayError(error : string){
 console.log('error', error)
}

private displayData(data : Video[]){
  console.log('the data is', JSON.stringify(data));
}


}
