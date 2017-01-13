import { Component,Input } from '@angular/core';

import { Video} from '../models/Video';
import { VideoService} from '../Service/Video.Service';

@Component({
  selector: 'video-details',
  templateUrl: '../Video_Details/Video_Details.Component.html',
  

})
export class VideoDetailsComponent  { 
  
@Input() video : Video ;
constructor(private videoService:VideoService){

}

//*****OnClick play Video *****//

onclick(){
  //play Video *****
}


}
