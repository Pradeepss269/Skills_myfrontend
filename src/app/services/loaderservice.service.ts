import { Injectable } from '@angular/core';
import { CommonServiceService } from './common-service.service';

@Injectable({
  providedIn: 'root'
})
export class LoaderserviceService {

  constructor(private commonService: CommonServiceService) { }

  loading(){
    let loader = this.commonService.loader.getValue();
    this.commonService.loader.next(!loader);
  }
}
