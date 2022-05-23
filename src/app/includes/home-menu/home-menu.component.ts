import { Component, OnInit } from '@angular/core';
import { CommonServiceService } from 'src/app/services/common-service.service';

@Component({
  selector: 'app-home-menu',
  templateUrl: './home-menu.component.html',
  styleUrls: ['./home-menu.component.scss']
})
export class HomeMenuComponent implements OnInit {
  current_tab:number = 1;
  constructor(private common_service :CommonServiceService) {

  }

  ngOnInit(): void {
  }

  change_tab(tab:number){
    this.common_service.dashboard_tab.next(tab);
    this.current_tab = tab;
  }
}
