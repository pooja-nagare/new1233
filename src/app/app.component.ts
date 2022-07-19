import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'OnlineShopApp';

  uploadedFiles: any[] =[];
  constructor(){}

  ngOnInit(){
   /* this.messageService.add({
      severity:"success",
      summary:"Service Message",
      detail: "Via MessageService"
    });*/
  }

  OnUpload(event:any){
    for(let file of event.files){
      this.uploadedFiles.push(file);
    }
     // this.messageService.add({severity:'info', summary:'File Uploaded', detail:''});
  }
}
