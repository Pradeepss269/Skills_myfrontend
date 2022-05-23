import { Component, OnInit } from '@angular/core';
import { CommonServiceService } from '../services/common-service.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  current_tab :number = 1;
  constructor(private common_service :CommonServiceService) {
    this.common_service.dashboard_tab.subscribe((tab)=>{
      this.current_tab = tab;
    });
   }

  ngOnInit(): void {
  }

}
