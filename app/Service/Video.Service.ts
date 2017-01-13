
import { Injectable} from '@angular/core';
import {Http, Response ,Headers,RequestOptions} from '@angular/http' ;
import { Observable} from 'rxjs/Observable' ;
import 'rxjs/add/operator/map' ;
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

import { Video} from '../models/Video';




@Injectable()
export class VideoService {

    constructor(private http:Http){}

    //*********************************//
    fetchVideos(query : string) {
        return  this.http.get(`https://www.googleapis.com/youtube/v3/search?part=snippet&q=${query}`+
          '&maxResults=50' +
          '&type=video' +
'&key= AIzaSyClOz3rjzRw68Gq3up1ptHt_2UASQ7UNwk ')
.map(response =>response.json() )
.catch(this.handleError)
    }


//**************une méthode pour liker un vidéo

//****une méthode disliek video*******************//


//***********une méthode pour ajouter video to favorites*****//

private handleError(error:Response | any){
    let errMsg : string ;
    console.log('the error is', error);
    if(error instanceof Response)
    {
       
        errMsg = JSON.stringify(error) ;
                //console.log('we are here !', JSON.stringify(error.body))
                //var err = JSON.stringify(error.body)
        

    }else{
       
        errMsg = error.message ? error.message : error.toString();
    }

    console.log('err Msg',errMsg);
    return  Observable 
    .throw (errMsg) ;
}

}