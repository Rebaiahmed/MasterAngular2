import { Component,ViewEncapsulation,OnInit } from '@angular/core';




import * as moment from 'moment';

import { Blog} from '../models/Blog'

@Component({
  moduleId:module.id,
  selector: 'blogs',
  templateUrl: '../Blogs/Blogs.Component.html',

})
export class BlogsComponent implements OnInit  { 

  BlogList : Blog []=[];

  
//****déclarer attribut la liste des vidéos*****//

constructor(){

}
//****injecter le service dans le constructor*****//


//***ngOnInit*************************//

ngOnInit()
{
  
       

     
     
}
//****méthode addToFavorites******************//




}
