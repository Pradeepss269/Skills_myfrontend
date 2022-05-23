import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonServiceService {
  dashboard_tab = new Subject<any>();
  loader = new BehaviorSubject(false);
  constructor() { }
}
