import { Component, OnInit } from '@angular/core';
import { LoaderserviceService } from 'src/app/services/loaderservice.service';

@Component({
  selector: 'app-tab1',
  templateUrl: './tab1.component.html',
  styleUrls: ['./tab1.component.scss']
})
export class Tab1Component implements OnInit {

  public chart_1 :any = {
    "datasets": [
      { "data": [], "label": "1 Day", backgroundColor:'#0461B5', hoverBackgroundColor:'#0461B4'},
      { "data": [], "label": "3 Day", backgroundColor:'#56AF87', hoverBackgroundColor:'#56AF86'},
      { "data": [], "label": "7 Day", backgroundColor:'#242828', hoverBackgroundColor:'#242827'},
      { "data": [], "label": "30 Day", backgroundColor:'#1BC5BD', hoverBackgroundColor:'#1BC5BC' },
    ],
    "labels": [],
    "options": {
      "responsive": true,
      "maintainAspectRatio": false,
      "legend": {
        "position":"bottom",
      },
      "scales": {
        "yAxes": [{
          "ticks": {
          "beginAtZero": true
          },
          "gridLines": {
            "display":true,
            "borderDash": [2, 1],
          }
        }],
        "xAxes": [{
          "ticks": {},
          "gridLines": {
            "display":false
          }
        }],
      }
    }
  };
  public chart_2:any = {
    "datasets": [
      { "data": [], "label": "All", backgroundColor:'#1BC5BC', hoverBackgroundColor:'#1BC5BC'},
    ],
    "labels": [],
    "options": {
      "responsive": true,
      "maintainAspectRatio": false,
      "legend": {
        "position":"bottom",
      },
      "scales": {
        "yAxes": [{
          "ticks": {
          "beginAtZero": true
          },
          "gridLines": {
            "display":true,
            "borderDash": [2, 1],
          }
        }],
        "xAxes": [{
          "ticks": {},
          "gridLines": {
            "display":false
          }
        }],
      }
    }
  };

  constructor(private loaderService :LoaderserviceService) { }

  ngOnInit(): void {
    this.setchart1Data();
    this.setcurve_chart();
    //this.loaderService.loading();
    setTimeout(() => {
      this.loaderService.loading();
    }, 300);

    setTimeout(() => {
      this.loaderService.loading();
    }, 3000);
  }

  setchart1Data(){
    this.chart_1.datasets[0].data = [10,5,6,7,8];
    this.chart_1.datasets[1].data = [5,5,12,7,15];
    this.chart_1.datasets[2].data = [10,5,16,7,8];
    this.chart_1.datasets[3].data = [10,15,6,5,18];
    this.chart_1.labels = ["May","June","July","August","September"];
  }

  setcurve_chart(){
    this.chart_2.datasets[0].data =  [10,5,6,7,8,10,5,6,7,8,10,5];
    this.chart_2.labels = ["Jan","Feb","March","April","May","Jun","Jul","Aug","Sept","Oct","Nov","Dev"];
  }
}
