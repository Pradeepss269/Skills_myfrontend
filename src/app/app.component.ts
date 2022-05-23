import { Component, OnDestroy } from '@angular/core';
import { CommonServiceService } from './services/common-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnDestroy {
  is_open:boolean = false;
  loader:boolean = false;

  constructor(private commonService: CommonServiceService){
    this.commonService.loader.subscribe((loader)=>{
      this.loader = loader;
    })
  }
  toggle_side_bar(event:any){
    this.is_open =event;
  }

  ngOnDestroy(): void {
    this.commonService.loader.unsubscribe();
  }
}
