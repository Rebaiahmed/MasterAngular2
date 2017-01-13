import { Component,ViewEncapsulation,OnInit } from '@angular/core';








@Component({
  moduleId:module.id,
  selector: 'quizz',
  templateUrl: '../Quiz/Qui.component.html',

})
export class QuizzComponent   { 



 quizz = [
   {
"id" :1,
"question" :"What Mean Component in angular2 ?",
"answer_correct" :"1",
"response":[{"id":"1", "value":"v1"},{"id":"1", "value":"v1"},{"id":"1", "value":"v1"},{"id":"1", "value":"v1"}]
}]
  
//****déclarer attribut la liste des vidéos*****//

constructor(){

}
//****injecter le service dans le constructor*****//


//***ngOnInit*************************//


//****method to search Videos
searchVidoes  = function(){

}

ngOnInit()
{
  
       

     
     
}
//****méthode addToFavorites******************//




}
